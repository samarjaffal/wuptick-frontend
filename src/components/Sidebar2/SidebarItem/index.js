import React from 'react';
import PropTypes from 'prop-types';
import {
    SideAnchor,
    Title,
    SidebarLink,
    Container,
    Icon,
    IconContainer,
} from './styles';

export const SidebarItem = ({ title, icon, url, color, children }) => {
    return (
        <SidebarLink>
            <Container>
                <SideAnchor to={url} color={color}>
                    <IconContainer>
                        <Icon icon={icon} />
                    </IconContainer>
                    <Title>{title}</Title>
                </SideAnchor>
            </Container>
            {children}
        </SidebarLink>
    );
};

SidebarItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    option: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
};
