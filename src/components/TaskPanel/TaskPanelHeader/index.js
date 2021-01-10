import React from 'react';
import PropTypes from 'prop-types';
import { TaskCheck } from '../../Task/TaskCheck/index';
import { Avatar } from '../../Avatar/index';
import { MinimalButton } from '../../MinimalButton/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter } from '../../SharedComponents/styles';
import {
    HeaderTaskOptions,
    ClosePanelIcon,
    Icon,
    CollaboratorsTitle,
} from './styles';
export const TaskPanelHeader = () => {
    return (
        <HeaderTaskOptions>
            <FlexCenter>
                <div
                    className="CloseButton"
                    style={{ marginRight: '20px' }}
                    onClick={() => close()}
                >
                    <ClosePanelIcon icon="chevron-right" />
                </div>

                <MinimalButton
                    color={Colors.green}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <TaskCheck
                            task={{
                                done: false,
                                _id: '12345',
                            }}
                            style="plain"
                            isParentHover={isParentHover}
                        />
                    )}
                </MinimalButton>

                <MinimalButton
                    color={Colors.yellow}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <FavoriteButton
                            taskId="252"
                            isParentHover={isParentHover}
                            inactiveColor={Colors.secondary}
                            activeColor={Colors.yellow}
                        />
                    )}
                </MinimalButton>
                <MinimalButton
                    color={Colors.secondary}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <Icon
                            icon="paperclip"
                            color={
                                isParentHover
                                    ? Colors.whitePrimary
                                    : Colors.secondary
                            }
                        />
                    )}
                </MinimalButton>
                <MinimalButton
                    color={Colors.secondary}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <Icon
                            icon="inbox"
                            color={
                                isParentHover
                                    ? Colors.whitePrimary
                                    : Colors.secondary
                            }
                        />
                    )}
                </MinimalButton>
                <MinimalButton
                    color={Colors.secondary}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <Icon
                            icon="sign-out-alt"
                            color={
                                isParentHover
                                    ? Colors.whitePrimary
                                    : Colors.secondary
                            }
                        />
                    )}
                </MinimalButton>
                <MinimalButton
                    color={Colors.red}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <Icon
                            icon={['far', 'trash-alt']}
                            color={
                                isParentHover ? Colors.whitePrimary : Colors.red
                            }
                        />
                    )}
                </MinimalButton>
            </FlexCenter>
            <FlexCenter id="Collaborators">
                <CollaboratorsTitle>Colaborators</CollaboratorsTitle>
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
    );
};

TaskPanelHeader.propTypes = {};
