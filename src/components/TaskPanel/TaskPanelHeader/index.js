import React from 'react';
import PropTypes from 'prop-types';
import { TaskCheck } from '../../Task/TaskCheck/index';
import { Avatar } from '../../Avatar/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import { FlexCenter } from '../../SharedComponents/styles';
import {
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
                        <DeleteIcon icon={['far', 'trash-alt']} />
                    </BoxOptionContainer>
                </BoxOption>
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
