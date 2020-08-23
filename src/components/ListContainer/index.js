import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Container, TitleContainer, Title, Icon, AddButton } from './styles';

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
                {button && (
                    <Link to="/">
                        <AddButton>
                            <Icon icon="plus" style={{ margin: 'auto' }} />
                        </AddButton>
                    </Link>
                )}
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
};
