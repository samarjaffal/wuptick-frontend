import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../MinimalButton/index';
import { FavoriteButton } from '../../FavoriteButton/index';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter } from '../../SharedComponents/styles';
import { Collaborators } from './Collaborators';
import { HeaderTaskCheck } from './HeaderTaskCheck/index';
import { MeQuery } from '../../../requests/MeQuery';
import { GetTaskQuery } from '../../../requests/Task/GetTaskQuery';
import {
    HeaderTaskOptions,
    ClosePanelIcon,
    Icon,
    CollaboratorsTitle,
} from './styles';
export const TaskPanelHeader = ({ task, panelRef }) => {
    useEffect(() => {
        console.log('TaskPanelHeader');
    }, [task.done]);

    return (
        <HeaderTaskOptions>
            <FlexCenter>
                <div
                    className="CloseButton"
                    style={{ marginRight: '20px' }}
                    onClick={() => panelRef.current.closeModal()}
                >
                    <ClosePanelIcon icon="chevron-right" />
                </div>
                <HeaderTaskCheck
                    task={task}
                    inactiveColor={Colors.whitePrimary}
                    activeColor={Colors.green}
                />
                <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {(isParentHover) => (
                        <MeQuery>
                            {({ data }) => {
                                const favTasks =
                                    data !== null ? data.me.favorite_tasks : [];
                                return (
                                    <FavoriteButton
                                        taskId={task._id}
                                        favTasks={favTasks}
                                        isParentHover={isParentHover}
                                        inactiveColor={Colors.secondary}
                                        activeColor={Colors.yellow}
                                    />
                                );
                            }}
                        </MeQuery>
                    )}
                </MinimalButton>
                {/* <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {() => <Icon icon="paperclip" color={Colors.secondary} />}
                </MinimalButton> */}
                {/*   <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {() => <Icon icon="inbox" color={Colors.secondary} />}
                </MinimalButton> */}
                {/* <MinimalButton
                    color={Colors.secondary}
                    hover={Colors.hover}
                    size={35}
                    bg={Colors.whitePrimary}
                >
                    {() => (
                        <Icon icon="sign-out-alt" color={Colors.secondary} />
                    )}
                </MinimalButton> */}
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
                <GetTaskQuery taskId={task._id}>
                    {({ data }) => {
                        const task = data.getTask;
                        return <Collaborators task={task} />;
                    }}
                </GetTaskQuery>
            </FlexCenter>
        </HeaderTaskOptions>
    );
};

TaskPanelHeader.propTypes = {
    task: PropTypes.object,
    panelRef: PropTypes.any,
};
