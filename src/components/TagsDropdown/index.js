import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdrown/index';
import { useDropdown } from '../../hooks/useDropdown';
import { UpdateTaskMutation } from '../../requests/Task/UpdateTaskMutation';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../assets/css/colors';
import { Ul } from '../SharedComponents/styles';
import { Container, ItemList, Tag } from './styles';

export const TagsDropdown = ({ dropdownRef, tags, closeDropDown }) => {
    const { open, position } = useDropdown();
    const [items, setItems] = useState([]);
    const { currentProject, currentModule, currentTask } = useUser();

    const url = `project/${currentProject._id}/module/${currentModule._id}`;

    const randomColor = useCallback(() => {
        var keys = Object.keys(Colors);
        const color = Colors[keys[(keys.length * Math.random()) << 0]];
        console.log(color, 'color');
        return color;
    }, []);

    useEffect(() => {
        setItems(tags);
    }, [dropdownRef]);

    return (
        <Dropdown
            ref={dropdownRef}
            open={open}
            transform="0"
            width="200px"
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
            bg={Colors.whitePrimary}
        >
            <UpdateTaskMutation>
                {({ doUpdateTask }) => (
                    <div id="tags-list">
                        <Container>
                            <Ul>
                                <ItemList>
                                    <Tag
                                        color={Colors.gray}
                                        onClick={() => {
                                            doUpdateTask(
                                                currentTask._id,
                                                { tag: null },
                                                currentModule._id,
                                                url
                                            );
                                            closeDropDown();
                                        }}
                                    >
                                        None
                                    </Tag>
                                </ItemList>
                                {items.map((item, index) => (
                                    <ItemList key={index}>
                                        <Tag
                                            color={item.color}
                                            onClick={() => {
                                                doUpdateTask(
                                                    currentTask._id,
                                                    { tag: item._id },
                                                    currentModule._id,
                                                    url
                                                );
                                                closeDropDown();
                                            }}
                                        >
                                            {item.name}
                                        </Tag>
                                    </ItemList>
                                ))}
                            </Ul>
                        </Container>
                    </div>
                )}
            </UpdateTaskMutation>
        </Dropdown>
    );
};

TagsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    tags: PropTypes.array,
    closeDropDown: PropTypes.func,
};
