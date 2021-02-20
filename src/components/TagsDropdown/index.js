import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdrown/index';
import { useDropdown } from '../../hooks/useDropdown';
import { UpdateTaskMutation } from '../../requests/Task/UpdateTaskMutation';
import { useUser } from '../../hooks/useUser';
import { useFilter } from '../../hooks/useFilter';
import { Colors } from '../../assets/css/colors';
import { Ul } from '../SharedComponents/styles';
import { Container, ItemList, Tag, InputSearch } from './styles';

export const TagsDropdown = ({ dropdownRef, tags: _tags, closeDropDown }) => {
    const {
        getSuggestions,
        inputRef,
        items,
        setItems,
        setParams,
    } = useFilter();
    const { open, position } = useDropdown();
    const [tags, setTags] = useState([]);

    const { currentProject, currentModule, currentTask } = useUser();

    const url = `project/${currentProject._id}/module/${currentModule._id}`;

    const randomColor = useCallback(() => {
        var keys = Object.keys(Colors);
        const color = Colors[keys[(keys.length * Math.random()) << 0]];
        console.log(color, 'color');
        return color;
    }, []);

    useEffect(() => {
        setItems(_tags);
        setParams(['name']);
        setTags(_tags);
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
            <div className="TagsList">
                <div
                    className="SearchContainer"
                    style={{ paddingBottom: '0.5em' }}
                >
                    <InputSearch
                        type="text"
                        placeholder="Search or add a new tag"
                        className="search"
                        ref={inputRef}
                        onChange={() => getSuggestions(tags)}
                    />
                </div>

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
            </div>
        </Dropdown>
    );
};

TagsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    tags: PropTypes.array,
    closeDropDown: PropTypes.func,
};