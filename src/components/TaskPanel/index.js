import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Panel } from '../Panel/index';
import { TaskPanelHeader } from './TaskPanelHeader';
import { TaskOverview } from './TaskOverview';
import { RepliesSection } from './RepliesSection/index';
import { useUser } from '../../hooks/useUser';
import { UpdateTaskMutation } from '../../requests/Task/UpdateTaskMutation';
import { GetTaskQuery } from '../../requests/Task/GetTaskQuery';
import { Container } from './styles';

const MemoTaskPanel = ({ panelRef }) => {
    const {
        currentTask,
        currentModule,
        setCurrentTask,
        currentProject,
    } = useUser();

    useEffect(() => {
        console.log('render MemoTaskPanel');
    }, [panelRef]);

    return (
        <Panel
            ref={panelRef}
            title="Task Panel"
            header={TaskPanelHeader}
            headerProps={{
                task: currentTask,
                panelRef: panelRef,
            }}
        >
            <Container>
                <GetTaskQuery taskId={currentTask._id}>
                    {({ data }) => {
                        const task = data.getTask;
                        return (
                            <UpdateTaskMutation>
                                {({ doUpdateTask }) => (
                                    <TaskOverview
                                        task={task}
                                        module={currentModule}
                                        doUpdateTask={doUpdateTask}
                                        setCurrentTask={setCurrentTask}
                                        currentProject={currentProject}
                                    />
                                )}
                            </UpdateTaskMutation>
                        );
                    }}
                </GetTaskQuery>

                <RepliesSection task={currentTask} />
            </Container>
        </Panel>
    );
};

MemoTaskPanel.propTypes = {
    panelRef: PropTypes.any,
};

function areEqual(prevProps, nextProps) {
    return prevProps.panelRef.current === nextProps.panelRef.current;
}

export const TaskPanel = React.memo(MemoTaskPanel, areEqual);
