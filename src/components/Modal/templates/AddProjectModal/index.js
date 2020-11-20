import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from '../../../Forms/Input/index';
import { TextArea } from '../../../Forms/TextArea/index';
import { Modal } from '../../index';
import { ColorPicker } from '../../../ColorPicker/index';
import { ListContainer } from '../../../ListContainer/index';
import { Colors } from '../../../../assets/css/colors';
import { ErrorMessage, ButtonContainer, SaveButton, Label } from './styles';
import { Div, FlexSpaceBetween } from '../../../SharedComponents/styles';

export const AddProjectModal = ({ modalRef }) => {
    const [colorSelected, setColorSelected] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const getColorSelected = (value) => {
        setColorSelected(value);
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
                    />
                    {errors.name && (
                        <ErrorMessage>
                            {errors.old_password.message}
                        </ErrorMessage>
                    )}
                    <TextArea
                        type="text"
                        name="description"
                        placeholder="Description"
                        width="100%"
                        refEl={register()}
                        bg={Colors.white}
                    />
                    <Div>
                        <ListContainer>
                            <FlexSpaceBetween>
                                <Label>Select Color</Label>
                                <ColorPicker
                                    getColorSelected={getColorSelected}
                                />
                            </FlexSpaceBetween>
                        </ListContainer>
                    </Div>
                    <ButtonContainer>
                        <SaveButton
                            width="100%"
                            onClick={() => console.log('hello')}
                        >
                            Save
                        </SaveButton>
                    </ButtonContainer>
                </Div>
            </form>
        </Modal>
    );
};

AddProjectModal.propTypes = {
    modalRef: PropTypes.any,
};
