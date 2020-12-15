import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '../../Avatar/index';
import { TaskCheck } from '../TaskCheck/index';
import { Colors } from '../../../assets/css/colors';
import { Div } from '../../SharedComponents/styles';
import {
    Task as TaskStyled,
    TaskText,
    TaskOptions,
    OptionContainer,
    AsigneeOption,
    SetDate,
    CenterContent,
} from './styles';

export const TaskItem = () => {
    return (
        <div className="TaskContainer">
            <TaskStyled>
                <Div customProps="margin-left:30px; width:70%; display:flex;">
                    <TaskCheck />
                    <TaskText>
                        Lorem Ipsum is simply. Lorem Ipsum is simply Lorem Ipsum
                        is simple is ter...
                    </TaskText>
                </Div>

                <TaskOptions>
                    <OptionContainer>
                        <AsigneeOption>
                            <Avatar
                                hide={false}
                                size={25}
                                src={`https://uifaces.co/our-content/donated/bUkmHPKs.jpg`}
                            />
                        </AsigneeOption>
                    </OptionContainer>
                    <OptionContainer>
                        <CenterContent>
                            <div className="DeadLineOption">
                                <SetDate>Set Date</SetDate>
                            </div>
                        </CenterContent>
                    </OptionContainer>
                    <OptionContainer>
                        <CenterContent>
                            <div className="FavoriteOption">
                                <FontAwesomeIcon
                                    icon="star"
                                    color={`${Colors.softGray}`}
                                />
                            </div>
                        </CenterContent>
                    </OptionContainer>
                </TaskOptions>
            </TaskStyled>
        </div>
    );
};

TaskItem.propTypes = {};
