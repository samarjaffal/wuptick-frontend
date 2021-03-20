import React from 'react';
import PropTypes from 'prop-types';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { useUser } from '../../../hooks/useUser';
import { Sidebar } from '../../../components/Sidebar2/index';
import { useSidebar } from '../../../hooks/useSidebar';
import { Container, HamburguerMenu, HamburguerMenuContainer } from './styles';

export const LoggedLayout = ({ children, showNavbar = true, styles }) => {
    const { isLogged } = useUser();
    const { handleCollapse, isCollapsed, match } = useSidebar();

    return (
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            {isLogged && showNavbar && (
                <DropdownContextProvider>
                    <Sidebar />
                </DropdownContextProvider>
            )}
            {isCollapsed && (
                <HamburguerMenuContainer onClick={() => handleCollapse(false)}>
                    <HamburguerMenu
                        icon="bars"
                        collapsed={isCollapsed ? 1 : 0}
                    />
                </HamburguerMenuContainer>
            )}
            <Container
                {...styles}
                collapsed={isCollapsed ? 1 : 0}
                match={match ? 1 : 0}
            >
                {children}
            </Container>
        </div>
    );
};

LoggedLayout.propTypes = {
    children: PropTypes.any,
    showNavbar: PropTypes.bool,
    styles: PropTypes.object,
};
