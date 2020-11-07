import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { Avatar } from '../../../Avatar/index';
import { Modal } from '../../index';
import { Input } from '../../../Forms/Input/index';
import { RolesSelect } from '../../../RolesSelect/index';
import { useUser } from '../../../../hooks/useUser';
import { UpdateMemberRoleMutation } from '../../../../requests/project/UpdateMemberRoleMutation';
import { Colors } from '../../../../assets/css/colors';
import { Subtitle, MemberName, MemberEmail, Empty, Hr } from './styles';

const MembersList = ({ members }) => {
    const { currentProject } = useUser();
    return members.map((member, index) => (
        <div
            key={index}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5em',
                }}
            >
                <Avatar size={30} src={member.user.avatar} />
                <div className="user-info" style={{ marginLeft: '0.5em' }}>
                    <MemberName>
                        {member.user.name} {member.user.last_name}
                    </MemberName>
                    <MemberEmail>{member.user.email}</MemberEmail>
                </div>
            </div>

            <div>
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
            </div>
        </div>
    ));
};

export const MemberModal = ({ modalRef }) => {
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
                        autoComplete: 'abcd',
                        name: 'member-search',
                        id: 'member-search',
                        value: member,
                        onChange: (_event, { newValue }) => {
                            setMember(newValue);
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
                    onSuggestionsClearRequested={() => {
                        setSuggestions([]);
                    }}
                    getSuggestionValue={(suggestion) => suggestion.name}
                    renderSuggestion={(suggestion) => (
                        <div>{suggestion.name}</div>
                    )}
                />

                {/*                 <div className="invited-members" style={{ marginTop: '0.5em' }}>
                    {Array(1)
                        .fill()
                        .map((member, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.5em',
                                    }}
                                >
                                    <Avatar size={30} />
                                    <div
                                        className="user-info"
                                        style={{ marginLeft: '0.5em' }}
                                    >
                                        <MemberName>Peter Will</MemberName>
                                        <MemberEmail>
                                            peterwill@gmail.com
                                        </MemberEmail>
                                    </div>
                                </div>

                                <div>
                                    <Label
                                        name="Waiting for confirmation"
                                        color={Colors.yellow}
                                        showCaret={true}
                                        width="max-content"
                                    />
                                </div>
                            </div>
                        ))}
                </div> */}
            </div>
        </Modal>
    );
};

MemberModal.propTypes = {
    modalRef: PropTypes.any,
};
