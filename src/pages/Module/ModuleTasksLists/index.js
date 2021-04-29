import React from 'react';
import PropTypes from 'prop-types';
import { TasksSection } from '../TasksSection/index';
import { AddNew } from '../../../components/AddNew/index';
import { DropdownContextProvider } from '../../../context/DropdownContext';
import { AddTaskListMutation } from '../../../requests/Module/AddTaskListMutation';

export const ModuleTaskLists = ({ module, moduleId, task }) => {
    let newList = '';
    const callBackNewList = (value) => {
        newList = value;
    };

    return (
        <div className="TasksLists">
            <DropdownContextProvider>
                <TasksSection
                    lists={module.task_lists}
                    moduleId={moduleId}
                    taskId={task}
                />
            </DropdownContextProvider>
            <AddTaskListMutation>
                {({ doCreateList }) => {
                    const createList = () => doCreateList(moduleId, newList);
                    return (
                        <AddNew
                            text="Add List"
                            icon={true}
                            border={true}
                            setValue={callBackNewList}
                            doFunction={createList}
                        />
                    );
                }}
            </AddTaskListMutation>
        </div>
    );
};

ModuleTaskLists.propTypes = {
    module: PropTypes.object,
    moduleId: PropTypes.string,
    task: PropTypes.string,
};
