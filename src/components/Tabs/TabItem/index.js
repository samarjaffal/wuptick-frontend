import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './styles';

export const TabItem = ({ text, currenTab, tab, altTab, url }) => {
    return (
        <Tab
            to={url}
            active={
                currenTab == tab || (currenTab == undefined && altTab == '/')
                    ? 1
                    : 0
            }
        >
            {text}
        </Tab>
    );
};

TabItem.propTypes = {
    text: PropTypes.string,
    currenTab: PropTypes.string,
    tab: PropTypes.string,
    altTab: PropTypes.string,
    url: PropTypes.string,
};
