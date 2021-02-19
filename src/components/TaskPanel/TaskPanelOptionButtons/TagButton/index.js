import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { OutsideClick } from '../../../OutsideClick/index';
import { TagsDropdown } from '../../../TagsDropdown/index';
import { Colors } from '../../../../assets/css/colors';
import { TagIconSVG } from './styles';

export const TagButton = () => {
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();
    const eleRef = useRef();
    const dropdownRef = useRef();

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
                    color={Colors.primary}
                    name="Web"
                    hover={Colors.backgroud}
                >
                    {(isParentHover) => (
                        <TagIconSVG
                            width="18px"
                            height="18px"
                            viewBox="0 0 25 25"
                            color={
                                isParentHover ? Colors.primary : Colors.primary
                            }
                        />
                    )}
                </MinimalButton>
            </div>

            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <TagsDropdown
                            dropdownRef={dropdownRef}
                            closeDropDown={closeDropDown}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

TagButton.propTypes = {};
