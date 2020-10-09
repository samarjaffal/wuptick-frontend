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
    margin,
    onClicked,
    shadow = false,
    hover = null,
    cursor = 'default',
    children,
}) => {
    return (
        <Container
            shadow={shadow}
            hover={hover}
            cursor={cursor}
            margin={margin}
        >
            <TitleContainer>
                {icon && <Icon icon={icon} color={color} />}
                {title && <Title>{title}</Title>}
                {button && (
                    <div style={{ position: 'absolute', right: 0 }}>
                        <ButtonHome url="/" icon="plus" color={color} />
                    </div>
                )}
            </TitleContainer>
            {children}
        </Container>
    );
};

ListContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    button: PropTypes.bool,
    onClicked: PropTypes.func,
    shadow: PropTypes.bool,
    hover: PropTypes.string,
    cursor: PropTypes.string,
};
