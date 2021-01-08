import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FavoriteButton } from '../FavoriteButton/index';
import { TaskCheck } from '../Task/TaskCheck/index';
import { Avatar } from '../Avatar/index';
import { FlexCenter } from '../SharedComponents/styles';
import {
    Container,
    ModalBackdrop,
    ModalBox,
    ModalWrapper,
    Header,
    HeaderTaskOptions,
    ClosePanelIcon,
    BoxOption,
    BoxOptionContainer,
    URLTaskIcon,
    ArchiveIcon,
    DeleteIcon,
    LeaveIcon,
    CollaboratorsTitle,
} from './styles';

const Panel = forwardRef(({ children, onCloseFunc = null }, ref) => {
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
                          <Header>
                              <HeaderTaskOptions>
                                  <FlexCenter>
                                      <div
                                          className="CloseButton"
                                          style={{ marginRight: '20px' }}
                                          onClick={() => close()}
                                      >
                                          <ClosePanelIcon icon="chevron-right" />
                                      </div>

                                      <BoxOption>
                                          <BoxOptionContainer>
                                              <TaskCheck
                                                  task={{
                                                      done: false,
                                                      _id: '12345',
                                                  }}
                                                  style="plain"
                                              />
                                          </BoxOptionContainer>
                                      </BoxOption>

                                      <BoxOption>
                                          <BoxOptionContainer>
                                              <FavoriteButton taskId="252" />
                                          </BoxOptionContainer>
                                      </BoxOption>
                                      <BoxOption>
                                          <BoxOptionContainer>
                                              <URLTaskIcon icon="paperclip" />
                                          </BoxOptionContainer>
                                      </BoxOption>
                                      <BoxOption>
                                          <BoxOptionContainer>
                                              <ArchiveIcon icon="inbox" />
                                          </BoxOptionContainer>
                                      </BoxOption>
                                      <BoxOption>
                                          <BoxOptionContainer>
                                              <LeaveIcon icon="sign-out-alt" />
                                          </BoxOptionContainer>
                                      </BoxOption>
                                      <BoxOption>
                                          <BoxOptionContainer>
                                              <DeleteIcon
                                                  icon={['far', 'trash-alt']}
                                              />
                                          </BoxOptionContainer>
                                      </BoxOption>
                                  </FlexCenter>
                                  <FlexCenter id="Collaborators">
                                      <CollaboratorsTitle>
                                          Colaborators
                                      </CollaboratorsTitle>
                                      {Array(3)
                                          .fill()
                                          .map((member, index) => (
                                              <div
                                                  key={index}
                                                  style={{
                                                      margin: '0 4px',
                                                      display: 'flex',
                                                  }}
                                              >
                                                  <Avatar size={25} />
                                              </div>
                                          ))}
                                  </FlexCenter>
                              </HeaderTaskOptions>
                          </Header>
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
