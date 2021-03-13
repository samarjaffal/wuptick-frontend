import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    SideAnchor,
    Title,
    SidebarLink,
    Container,
    Icon,
    IconContainer,
    ButtonToggleList,
} from './styles';

export const SidebarSubItem = ({
    title,
    icon: Icon,
    url,
    color,
    fIcon = true,
    iconProps,
    onClick,
    children,
    arrow = null,
}) => {
    return (
        <SidebarLink>
            <Container>
                <IconContainer>
                    {fIcon ? <Icon icon={Icon} /> : <Icon {...iconProps} />}
                </IconContainer>
                <Title color={color} to={url}>
                    {title}
                </Title>
                {arrow && (
                    <ButtonToggleList
                        className="openListButton"
                        onClick={() => onClick()}
                    >
                        <FontAwesomeIcon icon={arrow} />
                    </ButtonToggleList>
                )}
            </Container>
            {children}
        </SidebarLink>
    );
};

SidebarSubItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.any,
    url: PropTypes.string,
    option: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
};
