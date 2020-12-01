import React, { Fragment } from 'react';
import { Navbar } from '../../../components/navbar/index';
import { useUser } from '../../../hooks/useUser';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { Container } from './styles';
export const LoggedLayout = ({ children, showNavbar = true }) => {
    const { isLogged } = useUser();
    return (
        <Fragment>
            {isLogged && showNavbar && (
                <DropdownContextProvider>
                    <Navbar />
                </DropdownContextProvider>
            )}
            <Container>{children}</Container>
        </Fragment>
    );
};
