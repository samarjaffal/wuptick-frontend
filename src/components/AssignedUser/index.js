import React from 'react';
import PropTypes from 'prop-types';
import { UserIconContainer, UserIconSVG } from './styles';

export const AssignedUser = () => {
    return (
        <UserIconContainer>
            <UserIconSVG width="14px" height="14px" viewBox="0 0 25 25" />
        </UserIconContainer>
    );
};

AssignedUser.propTypes = {};
