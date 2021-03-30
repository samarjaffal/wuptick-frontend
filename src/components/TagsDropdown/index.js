import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '../Dropdrown/index';
import { useDropdown } from '../../hooks/useDropdown';
import { UpdateTaskMutation } from '../../requests/Task/UpdateTaskMutation';
import { CreateTagMutation } from '../../requests/Tag/CreateTagMutation';
import { DeleteTagMutation } from '../../requests/Tag/DeleteTagMutation';
import { useUser } from '../../hooks/useUser';
import { useFilter } from '../../hooks/useFilter';
import { Colors } from '../../assets/css/colors';
import { Ul } from '../SharedComponents/styles';
import { Container, ItemList, Tag, InputSearch, RemoveButton } from './styles';

export const TagsDropdown = ({ dropdownRef, tags: _tags, closeDropDown }) => {
    const {
        getSuggestions,
        inputRef,
        items,
        setItems,
        setParams,
    } = useFilter();
    const { open, position, width } = useDropdown();
    const [tags, setTags] = useState([]);

    const {
        currentProject,
        currentModule,
        currentTask,
        teamSelected,
        generateTaskUrl,
    } = useUser();

    const randomColor = useCallback(() => {
        let tempColors = { ...Colors };

        let removeColors = [
            'white',
            'whitePrimary',
            'backgroud',
            'softGray',
            'hover',
            'black',
        ];
        removeColors.forEach((e) => delete tempColors[e]);
        var keys = Object.keys(Colors);
        const color = tempColors[keys[(keys.length * Math.random()) << 0]];
        return color;
    }, []);

    useEffect(() => {
        setItems(_tags);
        setParams(['name']);
        setTags(_tags);
    }, [dropdownRef, _tags]);

    const renderTagsList = (doUpdateTask) => {
        return items.map((item, index) => (
            <ItemList key={index}>
                <Tag
                    color={item.color}
                    onClick={() => {
                        doUpdateTask(
                            currentTask._id,
                            {
                                tag: item._id,
                            },
                            currentModule._id,
                            generateTaskUrl(
                                currentProject._id,
                                currentModule._id,
                                currentTask._id
                            )
                        );
                        closeDropDown();
                    }}
                >
                    {item.name}
                </Tag>
                <DeleteTagMutation teamId={teamSelected._id}>
                    {({ doDeleteTag }) => (
                        <RemoveButton onClick={() => doDeleteTag(item._id)}>
                            <FontAwesomeIcon icon="times" />
                        </RemoveButton>
                    )}
                </DeleteTagMutation>
            </ItemList>
        ));
    };

    const renderAddNewTag = (doCreateTag) => {
        return (
            <ItemList>
                <Tag
                    color={Colors.primary}
                    onClick={() => {
                        doCreateTag({
                            name: inputRef.current.value,
                            color: randomColor(),
                            team: teamSelected._id,
                        });
                    }}
                >
                    Add a new tag
                </Tag>
            </ItemList>
        );
    };

    return (
        <Dropdown
            ref={dropdownRef}
            open={open}
            transform="0"
            width={`${width}px`}
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

                <CreateTagMutation teamId={teamSelected._id}>
                    {({ doCreateTag }) => (
                        <UpdateTaskMutation>
                            {({ doUpdateTask }) => (
                                <div id="tags-list">
                                    <Container>
                                        <Ul>
                                            {items.length > 0 ? (
                                                <>
                                                    <ItemList>
                                                        <Tag
                                                            color={Colors.gray}
                                                            onClick={() => {
                                                                doUpdateTask(
                                                                    currentTask._id,
                                                                    {
                                                                        tag: null,
                                                                    },
                                                                    currentModule._id,
                                                                    url
                                                                );
                                                                closeDropDown();
                                                            }}
                                                        >
                                                            None
                                                        </Tag>
                                                    </ItemList>
                                                    {renderTagsList(
                                                        doUpdateTask
                                                    )}
                                                </>
                                            ) : (
                                                renderAddNewTag(doCreateTag)
                                            )}
                                        </Ul>
                                    </Container>
                                </div>
                            )}
                        </UpdateTaskMutation>
                    )}
                </CreateTagMutation>
            </div>
        </Dropdown>
    );
};

TagsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    tags: PropTypes.array,
    closeDropDown: PropTypes.func,
};
