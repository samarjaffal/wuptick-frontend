import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../index';
import { Div, Button } from '../../../SharedComponents/styles';
import { Colors } from '../../../../assets/css/colors';
import { Message } from './styles';

export const DeleteModal = ({ modalRef, title, doFunc, loading }) => {
    return (
        <Modal ref={modalRef} title={title}>
            <Message>
                ⚠️This is a permanent action and you will not recover the info
                again
            </Message>
            <Div customProps="text-align: end; margin-top: 40px;">
                <Button
                    bg={Colors.white}
                    color={Colors.black}
                    margin="0 0.5em 0 0"
                    onClick={() => modalRef.current.closeModal()}
                >
                    Cancel
                </Button>
                <Button
                    bg={Colors.red}
                    onClick={() => doFunc()}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Delete'}
                </Button>
            </Div>
        </Modal>
    );
};

DeleteModal.propTypes = {
    modalRef: PropTypes.any,
    title: PropTypes.string,
};
