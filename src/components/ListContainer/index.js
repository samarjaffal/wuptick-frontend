import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Icon } from './styles';

export const ListContainer = ({ title, icon, children }) => {
    return (
        <Container>
            <Title>
                <Icon icon={icon} />
                {title}
            </Title>
            {children}
        </Container>
    );
};

ListContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};
