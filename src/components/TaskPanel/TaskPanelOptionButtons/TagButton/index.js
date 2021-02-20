import React, { useRef, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { OutsideClick } from '../../../OutsideClick/index';
import { TagsDropdown } from '../../../TagsDropdown/index';
import { Colors } from '../../../../assets/css/colors';
import { TagIconSVG } from './styles';

export const TagButton = ({ tag, tags }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const defaultColor = Colors.gray;
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();
    const eleRef = useRef();
    const dropdownRef = useRef();

    useEffect(() => {
        handleData();
    }, [tag]);

    const handleData = () => {
        if (tag == null || Object.keys(tag).length == 0) {
            setName('');
            setColor(defaultColor);
            return;
        }
        setName(tag.name);
        setColor(tag.color || defaultColor);
    };

    const initDropDown = () => {
        document.getElementById('dropwdown-app').innerHTML = '';
        setRenderDropdown(true);
    };

    const openDropdown = async () => {
        await initDropDown();
        handleDropDown(true, dropdownRef, eleRef);
    };

    const closeDropDown = () => {
        handleDropDownOutsideClick(false, dropdownRef);
        setRenderDropdown(false);
    };

    const handleOutsideClick = () => {
        closeDropDown();
    };

    return (
        <>
            <div
                className="TagButton"
                onClick={() => openDropdown()}
                ref={eleRef}
            >
                <MinimalButton
                    color={color}
                    name={name}
                    hover={Colors.backgroud}
                >
                    {() => (
                        <TagIconSVG
                            width="18px"
                            height="18px"
                            viewBox="0 0 25 25"
                            color={color}
                        />
                    )}
                </MinimalButton>
            </div>

            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <TagsDropdown dropdownRef={dropdownRef} tags={tags} />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

TagButton.propTypes = {
    tag: PropTypes.object,
    tags: PropTypes.array,
};
