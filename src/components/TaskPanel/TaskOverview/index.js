import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../Avatar/index';
import { TaskPanelOptionButtons } from '../TaskPanelOptionButtons/index';
import { FontIconButton } from '../../FontIconButton/index';
import { Editor } from '../../Editor/index';
import { FlexCenter } from '../../SharedComponents/styles';
import {
    TaskContainer,
    TaskDetails,
    TaskName,
    TaskDescription,
    TaskOwner,
    TaskCreatedDate,
    TaskInfo,
    Dot,
} from './styles';

export const TaskOverview = () => {
    const [isEditing, setEditing] = useState(false);

    const toggleEditing = () => {
        setEditing(!isEditing);
    };

    const handleEditorData = () => {
        const data = {
            blocks: [
                {
                    type: 'paragraph',
                    data: {
                        text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    },
                },
            ],
        };
        return data;
    };

    return (
        <TaskContainer>
            <div className="AvatarContainer">
                <Avatar size={30} />
            </div>
            <TaskDetails>
                <FlexCenter>
                    <TaskName>Create a Home Page</TaskName>
                    {!isEditing && (
                        <FontIconButton
                            doOnCLick={toggleEditing}
                            iconName="edit"
                        />
                    )}
                </FlexCenter>

                <div className="TaskDescriptionContainer">
                    <div>
                        {isEditing ? (
                            <Editor
                                data={handleEditorData()}
                                setEditing={setEditing}
                            />
                        ) : (
                            <>
                                <TaskDescription>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </TaskDescription>
                                <TaskInfo>
                                    <TaskOwner to="#">Samar Jaffal</TaskOwner>
                                    <Dot icon="circle" />
                                    <TaskCreatedDate>
                                        Oct. 06 4:00pm
                                    </TaskCreatedDate>
                                </TaskInfo>
                            </>
                        )}
                    </div>
                </div>
                <TaskPanelOptionButtons />
            </TaskDetails>
        </TaskContainer>
    );
};

TaskOverview.propTypes = {};
