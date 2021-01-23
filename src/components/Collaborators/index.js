import React from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUser';
import { Avatar } from '../Avatar/index';

export const Collaborators = () => {
    const { currentTask } = useUser();
    const size = 3;
    return (
        Object.keys(currentTask).length > 0 &&
        currentTask.collaborators.slice(0, size).map((member, index) => (
            <div
                key={index}
                style={{
                    margin: '0 4px',
                    display: 'flex',
                }}
            >
                <Avatar size={25} src={member.avatar} hide={false} />
            </div>
        ))
    );
};

Collaborators.propTypes = {};
