import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import {
    CloseButton,
    Container,
    ModalBackdrop,
    ModalBox,
    ModalWrapper,
    Title,
} from './styles';

const Panel = forwardRef(({ children, title, onCloseFunc = null }, ref) => {
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

Panel.displayName = 'Panel';

export { Panel };

Panel.propTypes = {};
