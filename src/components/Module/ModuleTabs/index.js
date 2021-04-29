import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '../../Tabs/index';
import { TabItem } from '../../Tabs/TabItem/index';

export const ModuleTabs = ({ currentURL, tab, moduleId }) => {
    const [currentTab, setCurrentTab] = useState(null);

    useEffect(() => {
        setCurrentTab(tab);
    }, [tab, moduleId]);

    return (
        <Tabs>
            <TabItem
                text="Tasks"
                url={`${currentURL}`}
                currenTab={currentTab}
                tab={undefined}
            />
            {/*             <TabItem
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
            /> */}
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
