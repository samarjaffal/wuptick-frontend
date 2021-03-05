import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../../Dropdrown/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { useUser } from '../../../../../hooks/useUser';
import { SaveTaskListsOrderMutation } from '../../../../../requests/Module/SaveTaskListsOrderMutation';
import { Colors } from '../../../../../assets/css/colors';
import { Ul } from '../../../../SharedComponents/styles';
import { Item } from './styles';

export const TaskListsDropdown = ({
    lists,
    task,
    currentList,
    dropdownRef,
    closeDropDown = null,
}) => {
    const [_lists, setLists] = useState([]);
    const { open, position } = useDropdown();
    const { currentModule } = useUser();

    useEffect(() => {
        setLists(lists);
    }, []);

    const moveToList = (listId) => {
        let tempLists = _lists.map((list) => Object.assign({}, list));
        let tempCurrentList = { ...currentList };

        tempLists = tempLists.map((list) => {
            let tasks = list.tasks.map((task) => task._id);
            list.tasks = tasks;

            return list;
        });

        const { tasks } = tempCurrentList;

        let updatedTasks = tasks
            .filter((_task) => _task._id !== task._id)
            .map((task) => task._id);

        tempCurrentList = { ...tempCurrentList, tasks: updatedTasks };

        let newUpdatedList = tempLists.map((list) =>
            list._id == tempCurrentList._id ? tempCurrentList : list
        );

        newUpdatedList.forEach((list) => {
            if (list._id == listId) {
                list.tasks.push(task._id);
            }
        });
        return newUpdatedList;
    };

    const saveOrder = (listId, doSaveOrder) => {
        if (listId == currentList._id) {
            closeDropDown();
            return;
        }
        let newLists = moveToList(listId);
        doSaveOrder(currentModule._id, newLists);
        closeDropDown();
    };

    return (
        <Dropdown
            open={open}
            width="200px"
            transform="0"
            ref={dropdownRef}
            bg={Colors.whitePrimary}
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            <div className="tasks-lists">
                <SaveTaskListsOrderMutation>
                    {({ doSaveOrder }) => (
                        <Ul>
                            {lists.map((list, index) => (
                                <li
                                    key={index}
                                    onClick={() =>
                                        saveOrder(list._id, doSaveOrder)
                                    }
                                >
                                    <Item>{list.name}</Item>
                                </li>
                            ))}
                        </Ul>
                    )}
                </SaveTaskListsOrderMutation>
            </div>
        </Dropdown>
    );
};

TaskListsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    closeDropDown: PropTypes.func,
    lists: PropTypes.array,
    task: PropTypes.object,
    currentList: PropTypes.object,
};
