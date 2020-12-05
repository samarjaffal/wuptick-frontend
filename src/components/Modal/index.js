import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import {
    ModalWrapper,
    ModalBackdrop,
    ModalBox,
    CloseButton,
    Title,
    Container,
} from './styles';

const Modal = forwardRef(({ children, title, onCloseFunc = null }, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            closeModal: () => close(),
        };
    });

    const open = () => {
        setDisplay(true);
    };

    const close = () => {
        setDisplay(false);
        if (onCloseFunc) {
            onCloseFunc();
        }
    };

    {
        return display
            ? ReactDom.createPortal(
                  <ModalWrapper>
                      <ModalBackdrop onClick={close} />
                      <ModalBox>
                          <CloseButton onClick={close}>
                              <FontAwesomeIcon
                                  icon="times"
                                  color={Colors.gray}
                              />
                          </CloseButton>
                          <Title>{title || ''}</Title>
                          <Container>{children}</Container>
                      </ModalBox>
                  </ModalWrapper>,
                  document.getElementById('modal-app')
              )
            : null;
    }
});

Modal.displayName = 'Modal';

export { Modal };

Modal.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    onCloseFunc: PropTypes.func,
};
