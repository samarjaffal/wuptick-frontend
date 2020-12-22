import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from './styles';

export const Sidebar = ({ children }) => {
    return (
        <Divider>
            <div className="Sidebar" style={{ position: 'fixed' }}>
                {children}
            </div>
        </Divider>
    );
};

Sidebar.propTypes = {};
