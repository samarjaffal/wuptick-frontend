import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Modal } from '../../index';
import { Input } from '../../../Forms/Input/index';
import { useUser } from '../../../../hooks/useUser';
import { Colors } from '../../../../assets/css/colors';
import { ErrorMessage, Button } from '../../../SharedComponents/styles';

export const AddTeamModal = ({ modalRef, loading, createTeam }) => {
    const { register, handleSubmit, errors } = useForm();
    const { currentUser } = useUser();

    const onFormSubmited = (formData) => {
        let input;
        input = {
            name: formData.name,
            owner: {
                _id: currentUser._id,
            },
        };
        createTeam(input);
        console.log('create', currentUser._id);
    };

    return (
        <Modal ref={modalRef} title={`Add Team`}>
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
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                    <Button width="100%" onClick={handleSubmit(onFormSubmited)}>
                        {loading ? 'Loading...' : 'Save'}
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

AddTeamModal.propTypes = {};
