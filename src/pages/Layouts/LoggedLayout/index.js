import React, { useContext } from 'react';
import Context from '../../../context/SidebarContext';
import PropTypes from 'prop-types';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { useUser } from '../../../hooks/useUser';
import { Sidebar } from '../../../components/Sidebar2/index';
import { Container, HamburguerMenu, HamburguerMenuContainer } from './styles';

export const LoggedLayout = ({ children, showNavbar = true, styles }) => {
    const { isLogged } = useUser();
    const { isCollapsed, setCollapsed } = useContext(Context);

    return (
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            {isLogged && showNavbar && (
                <DropdownContextProvider>
                    <Sidebar />
                </DropdownContextProvider>
            )}
            {isCollapsed && (
                <HamburguerMenuContainer onClick={() => setCollapsed(false)}>
                    <HamburguerMenu icon="bars" isCollapsed={isCollapsed} />
                </HamburguerMenuContainer>
            )}
            <Container {...styles} isCollapsed={isCollapsed}>
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
