import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '../Panel/index';
import { TaskPanelHeader } from './TaskPanelHeader';
import { TaskOverview } from './TaskOverview';

const MemoTaskPanel = ({ panelRef }) => {
    console.log('render MemoTaskPanel');
    return (
        <Panel ref={panelRef} title="Task Panel" header={TaskPanelHeader}>
            <TaskOverview />
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
