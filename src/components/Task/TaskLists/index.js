import React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from '../TaskList';
import { Ul } from '../../SharedComponents/styles';
import { Li } from './styles';

export const TaskLists = ({ lists = [] }) => {
    return (
        <Ul>
            {lists.map((list, index) => (
                <Li key={index}>
                    <TaskList list={list} />
                </Li>
            ))}
        </Ul>
    );
};

TaskLists.propTypes = {};
