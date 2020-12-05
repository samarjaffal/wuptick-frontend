import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Modal } from '../../index';
import { MembersList } from './MembersList';
import { Input } from '../../../Forms/Input/index';
import { useUser } from '../../../../hooks/useUser';
import { RemoveMemberFromTeamMutation } from '../../../../requests/Team/RemoveMemberFromTeamMutation';
import { Button, ErrorMessage } from '../../../SharedComponents/styles';
import { Colors } from '../../../../assets/css/colors';
import { Subtitle, Empty, MembersContainer, ButtonContainer } from './styles';

export const TeamMembersModal = ({
    team,
    modalRef,
    doFunc,
    loading,
    action = 'update',
}) => {
    const { register, handleSubmit, errors } = useForm();
    const [members, setMembers] = useState(team.members);

    const handleMembersList = () => {
        if (members) {
            return (
                <RemoveMemberFromTeamMutation modalRef={modalRef}>
                    {({ doRemoveMember, loading }) => (
                        <MembersList
                            members={members}
                            doRemoveMember={doRemoveMember}
                            loading={loading}
                            team={team}
                        />
                    )}
                </RemoveMemberFromTeamMutation>
            );
        } else {
            return <Empty>You don&apos;t have members in this team yet.</Empty>;
        }
    };
    const onFormSubmited = (formData) => {
        let input;
        if (action == 'update') {
            input = {
                name: formData.name,
            };
            doFunc(team._id, input);
            console.log('update');
        } else {
            console.log('save');
        }
    };

    useEffect(() => {
        if (Object.keys(team).length > 0) {
            setMembers(team.members);
        }
    }, [team]);

    return (
        <Modal
            ref={modalRef}
            title={`Edit Team`}
            onCloseFunc={handleSubmit(onFormSubmited)}
        >
            <Subtitle>Update Team info</Subtitle>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Team Name"
                        width="100%"
                        refInput={register({
                            required: 'You must specify a name',
                        })}
                        bg={Colors.white}
                        defaultValue={action == 'update' ? team.name : ''}
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </form>
            </div>
            <Subtitle>Current members</Subtitle>
            <MembersContainer>{handleMembersList()}</MembersContainer>
        </Modal>
    );
};

TeamMembersModal.propTypes = {
    team: PropTypes.object,
    modalRef: PropTypes.any,
};
