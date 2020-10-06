import React from 'react';
import { AddNew } from '../../AddNew/index';
import { TopicItem } from '../TopicItem/index';
import { List } from './styles';

export const ListTopics = () => {
    return (
        <div className="Container">
            <List>
                {Array(4)
                    .fill()
                    .map((item, index) => (
                        <li key={index}>
                            <TopicItem />
                        </li>
                    ))}
                <AddNew text="Add new topic" />
            </List>
        </div>
    );
};
