import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './styles';

export const TabItem = ({ text, currenTab, tab, url }) => {
    return (
        <Tab to={url} active={currenTab == tab || null ? 1 : 0}>
            {text}
        </Tab>
    );
};

TabItem.propTypes = {
    text: PropTypes.string,
    currenTab: PropTypes.string,
    tab: PropTypes.string,
    url: PropTypes.string,
};
