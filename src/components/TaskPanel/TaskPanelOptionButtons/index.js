import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../Avatar/index';
import { Colors } from '../../../assets/css/colors';
import {
    TaskActionsContainer,
    BoxOption,
    BoxOptionContainer,
    ReplyIconSVG,
    TagIconSVG,
    BoxOptionName,
} from './styles';

export const TaskPanelOptionButtons = () => {
    return (
        <TaskActionsContainer>
            <BoxOption color={Colors.blue}>
                <BoxOptionContainer>
                    <ReplyIconSVG
                        width="18px"
                        height="18px"
                        viewBox="0 0 25 25"
                        color={Colors.blue}
                    />
                    <BoxOptionName color={Colors.blue}>Answer</BoxOptionName>
                </BoxOptionContainer>
            </BoxOption>
            <BoxOption color={Colors.primary}>
                <BoxOptionContainer color={Colors.primary}>
                    <Avatar size={22} />
                    <BoxOptionName color={Colors.primary}>
                        Jhon D.
                    </BoxOptionName>
                </BoxOptionContainer>
            </BoxOption>
            <BoxOption color={Colors.primary}>
                <BoxOptionContainer color={Colors.primary}>
                    <TagIconSVG
                        width="18px"
                        height="18px"
                        viewBox="0 0 25 25"
                        color={Colors.primary}
                    />
                    <BoxOptionName color={Colors.primary}>Web</BoxOptionName>
                </BoxOptionContainer>
            </BoxOption>
        </TaskActionsContainer>
    );
};

TaskPanelOptionButtons.propTypes = {};
