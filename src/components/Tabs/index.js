import React from 'react';
import { TabsContainer } from './styles';

export const Tabs = ({ children }) => {
    return (
        <TabsContainer>
            <div className="Tabs">
                <nav>{children}</nav>
            </div>
        </TabsContainer>
    );
};
