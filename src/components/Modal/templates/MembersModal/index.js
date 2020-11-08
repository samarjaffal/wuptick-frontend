import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { Avatar } from '../../../Avatar/index';
import { Modal } from '../../index';
import { Input } from '../../../Forms/Input/index';
import { RolesSelect } from '../../../RolesSelect/index';
import { useUser } from '../../../../hooks/useUser';
import { Label } from '../../../Label/index';
import { UpdateMemberRoleMutation } from '../../../../requests/project/UpdateMemberRoleMutation';
import { GetInvitationsForProjectQuery } from '../../../../requests/project/GetInvitationsForProjectQuery';
import { Colors } from '../../../../assets/css/colors';
import {
    Div,
    FlexSpaceBetween,
    FlexCenter,
    Subtitle,
    MemberName,
    MemberEmail,
    Empty,
    Hr,
} from './styles';

const MembersList = ({ members }) => {
    const { currentProject } = useUser();
    return members.map((member, index) => (
        <FlexSpaceBetween key={index} customProps="position: relative">
            <FlexCenter customProps="margin-bottom: 0.5em;">
                <Avatar size={30} src={member.user.avatar} />
                <Div customProps="margin-left: 0.5em;">
                    <MemberName>
                        {member.user.name} {member.user.last_name}
                    </MemberName>
                    <MemberEmail>{member.user.email}</MemberEmail>
                </Div>
            </FlexCenter>

            <Div>
                <UpdateMemberRoleMutation>
                    {({ doUpdateRole }) => (
                        <RolesSelect
                            role={member.role}
                            doUpdate={doUpdateRole}
                            projectId={currentProject._id}
                            userId={member.user._id}
                        />
                    )}
                </UpdateMemberRoleMutation>
            </Div>
        </FlexSpaceBetween>
    ));
};

const InvitationList = ({ members }) => {
    return members.map((member, index) => (
        <FlexSpaceBetween key={index} customProps="position: relative">
            <FlexCenter customProps="margin-bottom: 0.5em;">
                <Avatar size={30} />
                <Div customProps="margin-left: 0.5em;">
                    <MemberName>{member.email}</MemberName>
                    <MemberEmail>{member.email}</MemberEmail>
                </Div>
            </FlexCenter>

            <Div>
                <Label
                    name="Waiting for confirmation"
                    color={Colors.yellow}
                    showCaret={true}
                    width="max-content"
                />
            </Div>
        </FlexSpaceBetween>
    ));
};

export const MemberModal = ({ modalRef, doInvitation, data }) => {
    const { currentProject, teamSelected } = useUser();
    const [members, setMembers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [member, setMember] = useState('');

    const handleMembersList = () => {
        if (members.length > 0) {
            return <MembersList members={currentProject.members} />;
        } else {
            return (
                <Empty>
                    You don&apos;t have members in this project yet. Let&apos;s
                    invite someone to your project sending an email with the
                    form below.
                </Empty>
            );
        }
    };

    useEffect(() => {
        if (Object.keys(currentProject).length > 0) {
            setMembers(currentProject.members);
        }
    }, [currentProject]);

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        let membersList = teamSelected.members;

        return inputLength === 0
            ? []
            : membersList.filter(
                  (member) =>
                      member.name.toLowerCase().slice(0, inputLength) ===
                      inputValue
              );
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return (
        <Modal
            ref={modalRef}
            title={`${currentProject ? `${currentProject.name}:` : ''} Members`}
        >
            <Subtitle>Current members of the project</Subtitle>

            {handleMembersList()}

            <Hr />
            <div className="invite-container">
                <Subtitle>Invite members to your project</Subtitle>
                {/* <Input placeholder="Email address or name" bg={Colors.white} /> */}

                <Autosuggest
                    inputProps={{
                        placeholder: 'Email address or name',
                        autoComplete: 'off',
                        name: 'member-search',
                        id: 'member-search',
                        value: member,
                        onChange: (_event, { newValue }) => {
                            setMember(newValue);
                        },
                        onKeyDown: (event) => {
                            const { keyCode } = event;
                            if (keyCode === 13 && suggestions.length <= 0) {
                                if (member === null || member === '') return;
                                if (!validateEmail(member)) return;
                                let input = {
                                    email: member,
                                    projectId: currentProject._id,
                                    teamId: teamSelected._id,
                                };
                                doInvitation(input);
                            }
                        },
                    }}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={async ({ value }) => {
                        if (!value) {
                            setSuggestions([]);
                            return;
                        }
                        setSuggestions(getSuggestions(value));
                    }}
                    onSuggestionSelected={(_event, { suggestion }) => {
                        console.log(suggestion, 'onSuggestionSelected');

                        const memberExist = currentProject.members.some(
                            (member) => member.user._id == suggestion._id
                        );
                        if (memberExist) return;

                        let memberObject = {
                            user: { ...suggestion },
                            role: {},
                        };

                        let newProjectMembers = [
                            ...currentProject.members,
                            { ...memberObject },
                        ];

                        currentProject.members = newProjectMembers;
                        let input = {
                            email: suggestion.email,
                            projectId: currentProject._id,
                            teamId: teamSelected._id,
                        };
                        doInvitation(input);
                    }}
                    onSuggestionsClearRequested={() => {
                        setSuggestions([]);
                    }}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    renderSuggestion={(suggestion) => (
                        <div>{suggestion.name}</div>
                    )}
                />

                <div className="invited-members" style={{ marginTop: '0.5em' }}>
                    <GetInvitationsForProjectQuery
                        projectId={currentProject._id}
                    >
                        {({ data }) => {
                            const {
                                getInvitationsForProject: invitations,
                            } = data;
                            return <InvitationList members={invitations} />;
                        }}
                    </GetInvitationsForProjectQuery>
                </div>
            </div>
        </Modal>
    );
};

MemberModal.propTypes = {
    modalRef: PropTypes.any,
};
