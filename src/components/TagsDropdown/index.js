import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdrown/index';
import { useDropdown } from '../../hooks/useDropdown';
import { Colors } from '../../assets/css/colors';
import { Ul } from '../SharedComponents/styles';
import { Container, ItemList, Tag } from './styles';

export const TagsDropdown = ({ dropdownRef, tags }) => {
    const { open, position } = useDropdown();
    const [items, setItems] = useState([]);

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

TagsDropdown.propTypes = {
    dropdownRef: PropTypes.any,
    tags: PropTypes.array,
};
