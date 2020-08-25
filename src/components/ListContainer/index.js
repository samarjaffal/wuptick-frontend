import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Container, TitleContainer, Title, Icon } from './styles';
import { ButtonHome } from '../ButtonHome/index';

export const ListContainer = ({
    title,
    icon,
    color,
    button = false,
    onClicked,
    children,
}) => {
    return (
        <Container>
            <TitleContainer>
                {icon && <Icon icon={icon} color={color} />}
                <Title>{title}</Title>
                {button && <ButtonHome url="/" icon="plus" color={color} />}
            </TitleContainer>
            {children}
        </Container>
    );
};

ListContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    color: PropTypes.string,
    button: PropTypes.bool,
    onClicked: PropTypes.func,
};
