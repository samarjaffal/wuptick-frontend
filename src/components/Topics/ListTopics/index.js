import React from 'react';
import { AddNew } from '../../AddNew/index';
import { TopicItem } from '../TopicItem/index';
import { List } from './styles';

export const ListTopics = ({ topics = [] }) => {
    return (
        <div className="Container">
            <List>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <TopicItem topic={topic} />
                    </li>
                ))}
            </List>
        </div>
    );
};
