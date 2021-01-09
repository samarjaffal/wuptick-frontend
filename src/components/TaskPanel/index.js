import React from 'react';
import { Panel } from '../Panel/index';
import { TaskPanelHeader } from './TaskPanelHeader';
import PropTypes from 'prop-types';

const MemoTaskPanel = ({ panelRef }) => {
    console.log('render MemoTaskPanel');
    return (
        <Panel ref={panelRef} title="Task Panel" header={TaskPanelHeader}>
            <h2>Hola que tal vale</h2>
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
