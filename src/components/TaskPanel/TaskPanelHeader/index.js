import React from 'react';
import PropTypes from 'prop-types';
import { TaskCheck } from '../../Task/TaskCheck/index';
import { Avatar } from '../../Avatar/index';
import { MinimalButton } from '../../MinimalButton/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter } from '../../SharedComponents/styles';
import { Collaborators } from '../../Collaborators/index';
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
                    color={Colors.secondary}
                    hover={Colors.hover}
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
                    color={Colors.secondary}
                    hover={Colors.hover}
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
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {() => <Icon icon="paperclip" color={Colors.secondary} />}
                </MinimalButton>
                <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {() => <Icon icon="inbox" color={Colors.secondary} />}
                </MinimalButton>
                <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {() => (
                        <Icon icon="sign-out-alt" color={Colors.secondary} />
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
                            color={isParentHover ? Colors.red : Colors.red}
                        />
                    )}
                </MinimalButton>
            </FlexCenter>
            <FlexCenter id="Collaborators">
                <CollaboratorsTitle>Colaborators</CollaboratorsTitle>
                <Collaborators />
            </FlexCenter>
        </HeaderTaskOptions>
    );
};

TaskPanelHeader.propTypes = {};
