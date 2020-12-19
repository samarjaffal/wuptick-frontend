import React from 'react';
import { Avatar } from '../../Avatar/index';
import { TaskCheck } from '../TaskCheck/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import UserIcon from '../../../assets/images/user.svg';
import { Colors } from '../../../assets/css/colors';
import {
    Task as TaskStyled,
    TaskText,
    TaskOptions,
    OptionContainer,
    AsigneeOption,
    SetDate,
    CenterContent,
    TextContainer,
    NoAsignee,
    UserIconSVG,
} from './styles';

export const TaskItem = ({ task = {} }) => {
    return (
        <div className="TaskContainer">
            <TaskStyled>
                <TextContainer>
                    <TaskCheck />
                    <TaskText>{task.name}</TaskText>
                </TextContainer>

                <TaskOptions>
                    <OptionContainer>
                        <AsigneeOption>
                            {task.assigned !== null &&
                            Object.keys(task.assigned).length > 0 ? (
                                <Avatar
                                    hide={false}
                                    size={25}
                                    src={task.assigned.avatar}
                                />
                            ) : (
                                <NoAsignee>
                                    {/*  <img src={UserIcon} alt="Asignee Icon" /> */}
                                    <UserIconSVG
                                        width="14px"
                                        height="14px"
                                        viewBox="0 0 25 25"
                                        fill={Colors.softGray}
                                    />
                                </NoAsignee>
                            )}
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
                            <FavoriteButton />
                        </CenterContent>
                    </OptionContainer>
                </TaskOptions>
            </TaskStyled>
        </div>
    );
};

TaskItem.propTypes = {};
