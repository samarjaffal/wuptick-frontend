import React, { Fragment } from 'react';
import { Navbar } from '../../../components/navbar/index';
import { useUser } from '../../../hooks/useUser';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { Sidebar } from '../../../components/Sidebar2/index';
import { Container } from './styles';
export const LoggedLayout = ({ children, showNavbar = true, styles }) => {
    const { isLogged } = useUser();
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/*   {isLogged && showNavbar && (
                <DropdownContextProvider>
                    <Navbar />
                </DropdownContextProvider>
            )} */}

            {isLogged && showNavbar && (
                <div>
                    <Sidebar />
                </div>
            )}
            <Container {...styles}>{children}</Container>
        </div>
    );
};
