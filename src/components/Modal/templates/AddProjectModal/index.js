import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from '../../../Forms/Input/index';
import { TextArea } from '../../../Forms/TextArea/index';
import { Modal } from '../../index';
import { ColorPicker } from '../../../ColorPicker/index';
import { PrivacyRadioButtons } from '../../../PrivacyRadioButtons/index';
import { ListContainer } from '../../../ListContainer/index';
import { useUser } from '../../../../hooks/useUser';
import { Colors } from '../../../../assets/css/colors';
import { ButtonContainer, Label } from './styles';
import {
    Div,
    FlexSpaceBetween,
    ErrorMessage,
    Button,
} from '../../../SharedComponents/styles';

export const AddProjectModal = ({
    modalRef,
    doFunction,
    loading,
    action = 'save',
}) => {
    const [colorSelected, setColorSelected] = useState(null);
    const [privacySelected, setPrivacySelected] = useState(null);
    const { currentUser, teamSelected, currentProject } = useUser();
    const { register, handleSubmit, errors } = useForm();

    const getColorSelected = (value) => {
        setColorSelected(value);
    };

    const getPrivacy = (value) => {
        setPrivacySelected(value);
    };

    const onFormSubmited = (formData) => {
        let input;
        if (action == 'update') {
            input = {
                name: formData.name,
                description: formData.description,
                color: colorSelected,
                privacy: privacySelected,
            };
            doFunction(currentProject._id, input);
        } else {
            input = {
                name: formData.name,
                description: formData.description,
                color: colorSelected,
                privacy: privacySelected,
                owner: {
                    _id: currentUser._id,
                },
                team_owner: {
                    _id: teamSelected._id,
                },
            };
            doFunction(input);
        }
        /*         console.log(input, 'input'); */
    };

    return (
        <Modal ref={modalRef} title="New Project">
            <form onSubmit={(e) => e.preventDefault()}>
                <Div style={{ width: '100%' }}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Project Name"
                        width="100%"
                        refInput={register({
                            required: 'You must specify a name',
                        })}
                        bg={Colors.white}
                        defaultValue={
                            action == 'update' ? currentProject.name : ''
                        }
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                    <TextArea
                        type="text"
                        name="description"
                        placeholder="Description"
                        width="100%"
                        refEl={register()}
                        bg={Colors.white}
                        defaultValue={
                            action == 'update' ? currentProject.description : ''
                        }
                    />
                    <Div>
                        <ListContainer>
                            <FlexSpaceBetween>
                                <Label>Select Color</Label>
                                <ColorPicker
                                    getColorSelected={getColorSelected}
                                    defaultValue={
                                        action == 'update'
                                            ? currentProject.color
                                            : null
                                    }
                                />
                            </FlexSpaceBetween>
                        </ListContainer>
                    </Div>
                    <Div customProps="display:flex;">
                        <PrivacyRadioButtons
                            getPrivacyCallBack={getPrivacy}
                            defaultValue={
                                action == 'update'
                                    ? currentProject.privacy
                                    : null
                            }
                        />
                    </Div>
                    <ButtonContainer>
                        <Button
                            width="100%"
                            onClick={handleSubmit(onFormSubmited)}
                        >
                            {loading
                                ? 'Loading...'
                                : action == 'update'
                                ? 'Update'
                                : 'Save'}
                        </Button>
                    </ButtonContainer>
                </Div>
            </form>
        </Modal>
    );
};

AddProjectModal.propTypes = {
    modalRef: PropTypes.any,
    doFunction: PropTypes.func,
    loading: PropTypes.bool,
    action: PropTypes.string,
};
