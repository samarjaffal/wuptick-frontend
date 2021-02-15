import React from 'react';
import { Avatar } from '../../Avatar/index';
import { Colors } from '../../../assets/css/colors';
import { MinimalButton } from '../../MinimalButton/index';
import { ReplyButton } from './ReplyButton';
import { TaskActionsContainer, TagIconSVG } from './styles';

export const TaskPanelOptionButtons = () => {
    return (
        <TaskActionsContainer>
            {/*   <ReplyButton /> */}
            <MinimalButton
                color={Colors.blue}
                hover={Colors.backgroud}
                name="Jhon D."
            >
                {() => <Avatar size={22} />}
            </MinimalButton>
            <MinimalButton
                color={Colors.primary}
                name="Web"
                hover={Colors.backgroud}
            >
                {(isParentHover) => (
                    <TagIconSVG
                        width="18px"
                        height="18px"
                        viewBox="0 0 25 25"
                        color={isParentHover ? Colors.primary : Colors.primary}
                    />
                )}
            </MinimalButton>
        </TaskActionsContainer>
    );
};

TaskPanelOptionButtons.propTypes = {};
