import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { useFilter } from '../../../../../hooks/useFilter';
import { Dropdown } from '../../../../Dropdrown/index';
import { CollaboratorsList } from './CollaboratorsList';
import { Colors } from '../../../../../assets/css/colors';
import { InputSearch } from '../../../../SharedComponents/styles';

export const CollaboratorsDropDown = ({
    collaborators,
    dropdownRef,
    closeDropDown = null,
}) => {
    const { open, position } = useDropdown();
    const [members, setMembers] = useState([]);
    const {
        getSuggestions,
        inputRef,
        items,
        setItems,
        setParams,
    } = useFilter();

    useEffect(() => {
        if (collaborators.length > 0) {
            setItems(collaborators);
            setParams(['name', 'last_name', 'email']);
            setMembers(collaborators);
        }
    }, [collaborators]);

    return (
        <Dropdown
            open={open}
            width="200px"
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
                        placeholder="Search"
                        className="search"
                        ref={inputRef}
                        onChange={() => getSuggestions(members)}
                    />
                </div>
                <CollaboratorsList
                    collaborators={items}
                    closeDropDown={closeDropDown}
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
