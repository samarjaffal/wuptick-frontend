import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { useFilter } from '../../../../../hooks/useFilter';
import { Dropdown } from '../../../../Dropdrown/index';
import { CollaboratorsList } from './CollaboratorsList';
import { useUser } from '../../../../../hooks/useUser';
import { Colors } from '../../../../../assets/css/colors';
import { InputSearch } from '../../../../SharedComponents/styles';

export const CollaboratorsDropDown = ({
    collaborators,
    dropdownRef,
    closeDropDown = null,
}) => {
    const { open, position } = useDropdown();
    const { currentProject } = useUser();
    const [taskCollaborators, setCollaborators] = useState([]);
    const [members, setMembers] = useState([]);
    const [pivot, setPivot] = useState('collaborators');
    /* let pivot = 'collaborators'; */
    const {
        getSuggestions,
        inputRef,
        items,
        setItems,
        setParams,
    } = useFilter();

    const formatMembers = () => {
        const collaboratorsIds = collaborators.map((collab) => collab._id);
        let members =
            Object.keys(currentProject).length > 0
                ? currentProject.members.map((member) => member.user)
                : [];
        let newMembers = members.filter(
            (member) => !collaboratorsIds.includes(member._id)
        );
        return newMembers;
    };

    useEffect(() => {
        setMembers(formatMembers());
        setParams(['name', 'last_name', 'email']);

        if (collaborators.length > 0) {
            setItems(collaborators);
            setCollaborators(collaborators);
        } else {
            setPivot('members');
            setItems(members);
        }
    }, [collaborators]);

    const handleSuggestions = () => {
        if (pivot == 'collaborators') {
            getSuggestions(taskCollaborators);
            if (items.length == 0) {
                setPivot('members');
                setItems(members);
                getSuggestions(members);
            }
        }

        if (pivot == 'members') {
            getSuggestions(members);
            if (inputRef.current.value.length == 0) {
                setPivot('collaborators');
                setItems(taskCollaborators);
                getSuggestions(taskCollaborators);
            }
        }
    };

    return (
        <Dropdown
            open={open}
            width="250px"
            transform="-85%"
            ref={dropdownRef}
            bg={Colors.whitePrimary}
            top={`${Math.round(position.top + 30)}px`}
            left={`${position.left}px`}
        >
            <div id="members-list">
                <div
                    className="SearchContainer"
                    style={{ marginBottom: '0.5em' }}
                >
                    <InputSearch
                        type="text"
                        placeholder="Search or add a new collaborator"
                        className="search"
                        ref={inputRef}
                        onChange={() => handleSuggestions()}
                    />
                </div>
                <CollaboratorsList
                    collaborators={items}
                    closeDropDown={closeDropDown}
                    pivot={pivot}
                />
            </div>
        </Dropdown>
    );
};

CollaboratorsDropDown.propTypes = {
    collaborators: PropTypes.array,
    dropdownRef: PropTypes.any,
    closeDropDown: PropTypes.func,
};
