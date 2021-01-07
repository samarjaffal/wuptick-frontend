import React from 'react';
import { Panel } from '../Panel/index';
import PropTypes from 'prop-types';

export const TaskPanel = ({ panelRef }) => {
    return (
        <Panel ref={panelRef} title="Task Panel">
            <h2>Hola que tal vale</h2>
        </Panel>
    );
};

TaskPanel.propTypes = {};
