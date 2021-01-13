import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import {
    Container,
    ModalBackdrop,
    ModalBox,
    ModalWrapper,
    Header,
} from './styles';

const Panel = forwardRef(
    ({ header: HeaderComponentProp, children, onCloseFunc = null }, ref) => {
        const [display, setDisplay] = useState(false);
        const body = document.body;

        useImperativeHandle(ref, () => {
            return {
                openModal: () => open(),
                closeModal: () => close(),
            };
        });

        const open = () => {
            setDisplay(true);
            body.style.overflow = 'hidden';
        };

        const close = () => {
            setDisplay(false);
            body.style.overflow = 'auto';

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
                              {HeaderComponentProp && (
                                  <Header>
                                      <HeaderComponentProp />
                                  </Header>
                              )}
                              <Container>{children}</Container>
                          </ModalBox>
                      </ModalWrapper>,
                      document.getElementById('modal-app')
                  )
                : null;
        }
    }
);

Panel.displayName = 'Panel';

export { Panel };

Panel.propTypes = {
    header: PropTypes.any,
    children: PropTypes.any,
    onCloseFunc: PropTypes.func,
};
