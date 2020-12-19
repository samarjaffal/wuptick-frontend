import React from 'react';
import { Avatar } from '../../Avatar/index';
import { TaskCheck } from '../TaskCheck/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import {
    Task as TaskStyled,
    TaskText,
    TaskOptions,
    OptionContainer,
    AsigneeOption,
    SetDate,
    CenterContent,
    TextContainer,
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
                                <Avatar hide={false} size={25} />
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
