import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer } from '../ListContainer/index';
import { Message } from './styles';

export const NoData = ({ message }) => {
    return (
        <ListContainer>
            <Message>{message}</Message>
        </ListContainer>
    );
};

NoData.propTypes = {
    message: PropTypes.string,
};
