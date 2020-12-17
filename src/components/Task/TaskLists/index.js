import React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from '../TaskList';
import { Ul } from '../../SharedComponents/styles';
import { Li } from './styles';

export const TaskLists = () => {
    return (
        <Ul>
            {Array(2)
                .fill()
                .map((item, index) => (
                    <Li key={index}>
                        <TaskList />
                    </Li>
                ))}
        </Ul>
    );
};

TaskLists.propTypes = {};
