import React, { useEffect } from 'react';
import { ModuleItem } from '../ModuleItem';
import PropTypes from 'prop-types';

export const ListModuleItems = ({
    modules,
    projectId,
    setModuleCallback,
    doUpdateModule,
    editModuleId,
    setEditModuleId,
}) => {
    /*     useEffect(() => {
        setNewItems(originalItems);
    }, [originalItems]);
 */
    return modules.map((module, index) => (
        <ModuleItem
            key={module._id}
            index={index}
            module={module}
            projectId={projectId}
            setModuleCallback={setModuleCallback}
            editModuleId={editModuleId}
            setEditModuleId={setEditModuleId}
            doUpdateModule={doUpdateModule}
        />
    ));
};

ListModuleItems.propTypes = {};
