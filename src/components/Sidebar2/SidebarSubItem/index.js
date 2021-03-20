import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Title,
    SidebarLink,
    Container,
    IconContainer,
    ButtonToggleList,
} from './styles';

export const SidebarSubItem = ({
    title,
    icon: Icon,
    goTo,
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
                <Title color={color} onClick={() => goTo()}>
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
    goTo: PropTypes.func,
    option: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    fIcon: PropTypes.bool,
    iconProps: PropTypes.object,
    onClick: PropTypes.func,
    arrow: PropTypes.string,
};
