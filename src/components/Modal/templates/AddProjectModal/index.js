import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from '../../../Forms/Input/index';
import { TextArea } from '../../../Forms/TextArea/index';
import { Modal } from '../../index';
import { ColorPicker } from '../../../ColorPicker/index';
import { PrivacyRadioButtons } from '../../../PrivacyRadioButtons/index';
import { ListContainer } from '../../../ListContainer/index';
import { Label } from '../../../Label/index';
import { useUser } from '../../../../hooks/useUser';
import { Colors } from '../../../../assets/css/colors';
import { ButtonContainer, Label as LabelButton, TeamLabel } from './styles';
import {
    Div,
    FlexSpaceBetween,
    FlexCenter,
    ErrorMessage,
    Button,
} from '../../../SharedComponents/styles';

export const AddProjectModal = ({
    modalRef,
    doFunction,
    loading,
    newTeam = {},
    action = 'save',
}) => {
    const { currentUser, teamSelected, currentProject } = useUser();
    const { register, handleSubmit, errors } = useForm();
    const [colorSelected, setColorSelected] = useState(null);
    const [privacySelected, setPrivacySelected] = useState(null);
    const [team, setTeam] = useState(teamSelected);

    useEffect(() => {
        if (Object.keys(newTeam).length > 0) {
            setTeam(newTeam);
        }
    }, [newTeam]);

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
                    _id: team._id,
                },
            };
            doFunction(input);
        }
    };

    return (
        <Modal ref={modalRef} title="New Project">
            <FlexCenter>
                <TeamLabel>Team:</TeamLabel>
                <Label
                    color={Colors.primary}
                    name={team.name}
                    width="max-content"
                />
            </FlexCenter>
            <form
                onSubmit={(e) => e.preventDefault()}
                style={{ marginTop: '1em' }}
            >
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
                                <LabelButton>Select Color</LabelButton>
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
    newTeam: PropTypes.object,
};
