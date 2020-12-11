import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '../../../components/Tabs/index';
import { TabItem } from '../../../components/Tabs/TabItem/index';

export const ModuleTabs = ({ currentURL, currentTab }) => {
    return (
        <Tabs>
            <TabItem
                text="Tasks"
                url={`${currentURL}`}
                currenTab={currentTab}
                tab={undefined}
            />
            <TabItem
                text="Topics"
                url={`${currentURL}?tab=topics`}
                currenTab={currentTab}
                tab="topics"
            />

            <TabItem
                text="Links"
                url={`${currentURL}?tab=links`}
                currenTab={currentTab}
                tab="links"
            />
            <TabItem
                text="Files"
                url={`${currentURL}?tab=files`}
                currenTab={currentTab}
                tab="files"
            />
        </Tabs>
    );
};

ModuleTabs.propTypes = {
    currentURL: PropTypes.string,
    currentTab: PropTypes.string,
};
