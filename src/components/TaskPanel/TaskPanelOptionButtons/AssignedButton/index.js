import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { Avatar } from '../../../Avatar/index';
import { Colors } from '../../../../assets/css/colors';

export const AssignedButton = ({ assigned }) => {
    const [name, setName] = useState('Not assigned');
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        handleData();
    }, []);

    const handleData = useCallback(() => {
        if (assigned == null || Object.keys(assigned).length == 0) return;
        setName(`${assigned.name} ${assigned.last_name}`);
        setAvatar(assigned.avatar || null);
    });

    return (
        <MinimalButton color={Colors.blue} hover={Colors.backgroud} name={name}>
            {() => <Avatar size={22} src={avatar} />}
        </MinimalButton>
    );
};

AssignedButton.propTypes = {
    assigned: PropTypes.object,
};
