import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { ModalWrapper, ModalBackdrop, ModalBox, CloseButton } from './styles';

const Modal = forwardRef(({ children }, ref) => {
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
                          {children}
                      </ModalBox>
                  </ModalWrapper>,
                  document.getElementById('modal-app')
              )
            : null;
    }
});

Modal.displayName = 'Modal';

export { Modal };
