import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from '../../../Forms/Input/index';
import { TextArea } from '../../../Forms/TextArea/index';
import { Modal } from '../../index';
import { ListContainer } from '../../../ListContainer/index';
import { Colors } from '../../../../assets/css/colors';
import { ErrorMessage, ButtonContainer, SaveButton, Label } from './styles';
import { Div, Ul, FlexSpaceBetween } from '../../../SharedComponents/styles';

export const AddProjectModal = ({ modalRef }) => {
    const { register, handleSubmit, errors } = useForm();

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
                                <Div>
                                    <Ul customProps="display:flex;">
                                        {Array(6)
                                            .fill()
                                            .map((element, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        margin: '0 0.5em',
                                                    }}
                                                >
                                                    <Div customProps="width:25px; height:25px; border-radius:50%; background-color: #BFCAFF;"></Div>
                                                </li>
                                            ))}
                                    </Ul>
                                </Div>
                            </FlexSpaceBetween>
                        </ListContainer>
                    </Div>
                    <ButtonContainer>
                        <SaveButton width="100%" onClick={console.log('hello')}>
                            Save
                        </SaveButton>
                    </ButtonContainer>
                </Div>
            </form>
        </Modal>
    );
};
