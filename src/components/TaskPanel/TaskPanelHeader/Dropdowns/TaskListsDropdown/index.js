import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../../Dropdrown/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { Colors } from '../../../../../assets/css/colors';
import { Ul } from '../../../../SharedComponents/styles';
import { Item } from './styles';

export const TaskListsDropdown = ({
    lists,
    dropdownRef,
    closeDropDown = null,
}) => {
    const { open, position } = useDropdown();
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
                <Ul>
                    {lists.map((list, index) => (
                        <li key={index}>
                            <Item>{list.name}</Item>
                        </li>
                    ))}
                </Ul>
            </div>
        </Dropdown>
    );
};

TaskListsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    closeDropDown: PropTypes.func,
    lists: PropTypes.array,
};
