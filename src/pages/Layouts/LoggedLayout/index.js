import React, { Fragment } from 'react';
import { Navbar } from '../../../components/navbar/index';
import { useUser } from '../../../hooks/useUser';
import { DropdownContextProvider } from '../../../context/DropdownContext';

export const LoggedLayout = ({ children }) => {
    const { isLogged } = useUser();
    return (
        <Fragment>
            {isLogged && (
                <DropdownContextProvider>
                    <Navbar />
                </DropdownContextProvider>
            )}
            <div style={{ paddingTop: '60px', margin: '0 80px' }}>
                {children}
            </div>
        </Fragment>
    );
};