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

export const TaskItem = () => {
    return (
        <div className="TaskContainer">
            <TaskStyled>
                <TextContainer>
                    <TaskCheck />
                    <TaskText>
                        Lorem Ipsum is simply. Lorem Ipsum is simply Lorem Ipsum
                        is simple is ter...
                    </TaskText>
                </TextContainer>

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
                            <FavoriteButton />
                        </CenterContent>
                    </OptionContainer>
                </TaskOptions>
            </TaskStyled>
        </div>
    );
};

TaskItem.propTypes = {};
