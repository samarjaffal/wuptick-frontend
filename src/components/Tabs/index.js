import React from 'react';
import PropTypes from 'prop-types';
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

Tabs.propTypes = {
    children: PropTypes.any,
};
