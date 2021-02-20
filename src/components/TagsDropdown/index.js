import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdrown/index';
import { useDropdown } from '../../hooks/useDropdown';
import { Colors } from '../../assets/css/colors';
import { Ul } from '../SharedComponents/styles';
import { Container, ItemList, Tag } from './styles';

const MemoTagsDropdown = ({ dropdownRef, closeDropDown }) => {
    const { open, position } = useDropdown();
    const [items, setItems] = useState([]);

    const randomColor = useCallback(() => {
        var keys = Object.keys(Colors);
        const color = Colors[keys[(keys.length * Math.random()) << 0]];
        console.log(color, 'color');
        return color;
    }, []);

    useEffect(() => {
        setItems([
            { name: 'Item 1', color: Colors.blue },
            { name: 'Item 2', color: Colors.green },
            { name: 'Item 3', color: Colors.orange },
        ]);
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
            <div id="tags-list">
                <Container>
                    <Ul>
                        {items.map((item, index) => (
                            <ItemList key={index}>
                                <Tag color={item.color}>{item.name}</Tag>
                            </ItemList>
                        ))}
                    </Ul>
                </Container>
            </div>
        </Dropdown>
    );
};

MemoTagsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    closeDropDown: PropTypes.func,
};

function areEqual(prevProps, nextProps) {
    return prevProps.dropdownRef === nextProps.dropdownRef;
}

export const TagsDropdown = React.memo(MemoTagsDropdown, areEqual);
