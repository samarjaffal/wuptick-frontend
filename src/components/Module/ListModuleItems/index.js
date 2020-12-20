import React, { useEffect } from 'react';
import { ModuleItem } from '../ModuleItem';
import PropTypes from 'prop-types';

export const ListModuleItems = ({
    originalItems,
    newItems,
    setNewItems,
    setModuleCallback,
    doUpdateModule,
    editModuleId,
    setEditModuleId,
}) => {
    useEffect(() => {
        setNewItems(originalItems);
    }, [originalItems]);

    return newItems.map((module, index) => (
        <ModuleItem
            key={module._id}
            index={index}
            module={module}
            setModuleCallback={setModuleCallback}
            editModuleId={editModuleId}
            setEditModuleId={setEditModuleId}
            doUpdateModule={doUpdateModule}
        />
    ));
};

ListModuleItems.propTypes = {};
