import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../../../assets/css/colors';
import { FlexCenter } from '../../SharedComponents/styles';
import { Collaborators } from './Collaborators';
import { HeaderTaskCheck } from './HeaderTaskCheck/index';
import { HeaderDeleteButton } from './HeaderDeleteButton';
import { HeaderFavoriteButton } from './HeaderFavoriteButton';
import { GetTaskQuery } from '../../../requests/Task/GetTaskQuery';
import {
    HeaderTaskOptions,
    ClosePanelIcon,
    CollaboratorsTitle,
} from './styles';

export const TaskPanelHeader = ({ task, panelRef, closePanel }) => {
    useEffect(() => {
        console.log('TaskPanelHeader');
    }, [task.done]);

    return (
        <HeaderTaskOptions>
            <FlexCenter>
                <div
                    className="CloseButton"
                    style={{ marginRight: '20px' }}
                    onClick={() => closePanel()}
                >
                    <ClosePanelIcon icon="chevron-right" />
                </div>
                <HeaderTaskCheck
                    task={task}
                    inactiveColor={Colors.whitePrimary}
                    activeColor={Colors.green}
                />
                <HeaderFavoriteButton task={task} />
                <HeaderDeleteButton panelRef={panelRef} />
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
            </FlexCenter>
            <FlexCenter id="Collaborators">
                <CollaboratorsTitle>Colaborators</CollaboratorsTitle>
                <GetTaskQuery taskId={task._id}>
                    {({ data, loading }) => {
                        if (loading || !data) {
                            return 'loading';
                        }
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
    closePanel: PropTypes.func,
};
