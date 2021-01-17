import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '../Panel/index';
import { TaskPanelHeader } from './TaskPanelHeader';
import { TaskOverview } from './TaskOverview';
import { RepliesSection } from './RepliesSection/index';
import { useUser } from '../../hooks/useUser';
import { UpdateTaskMutation } from '../../requests/Task/UpdateTaskMutation';
import { Container } from './styles';

const MemoTaskPanel = ({ panelRef }) => {
    console.log('render MemoTaskPanel');
    const { currentTask, currentModule } = useUser();
    return (
        <Panel ref={panelRef} title="Task Panel" header={TaskPanelHeader}>
            <Container>
                <UpdateTaskMutation>
                    {({ doUpdateTask, loading }) => (
                        <TaskOverview
                            task={currentTask}
                            module={currentModule}
                            doUpdateTask={doUpdateTask}
                        />
                    )}
                </UpdateTaskMutation>
                <RepliesSection />
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
