import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar/index';

export const Collaborators = ({ task }) => {
    useEffect(() => {}, [task.collaborators]);

    const size = 3;
    return (
        Object.keys(task).length > 0 &&
        task.collaborators.slice(0, size).map((member, index) => (
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

Collaborators.propTypes = {
    task: PropTypes.object,
};
