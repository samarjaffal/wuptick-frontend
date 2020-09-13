import React from 'react';
import { Tab } from './styles';

export const TabItem = ({ text, currenTab, tab, url }) => {
    return (
        <Tab to={url} active={currenTab == tab || null ? 1 : 0}>
            {text}
        </Tab>
    );
};
