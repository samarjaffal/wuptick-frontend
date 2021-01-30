import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { OptionsButton } from '../../OptionsButton/index';
import { ReplyDropDown } from '../ReplyDropDown/index';
import { OutsideClick } from '../../OutsideClick/index';
import { useDropdown } from '../../../hooks/useDropdown';

export const OptionsButtonReplies = ({
    dropdownRef,
    setOpenEditor,
    index,
    doDeleteComment,
    taskId,
    reply,
}) => {
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();

    let optionsRef = useRef();

    const initDropDown = () => {
        document.getElementById('dropwdown-app').innerHTML = '';
        setRenderDropdown(true);
    };

    const openDropdown = async () => {
        await initDropDown();
        handleDropDown(true, dropdownRef, optionsRef);
    };

    const closeDropDown = () => {
        handleDropDownOutsideClick(false, dropdownRef);
        setRenderDropdown(false);
    };

    const handleOutsideClick = () => {
        closeDropDown();
    };

    const DeleteComment = () => {
        console.log(index, reply, taskId, 'delete');
        doDeleteComment(reply._id, taskId);
        closeDropDown();
    };

    return (
        <>
            <OptionsButton doFunc={openDropdown} elemRef={optionsRef} />
            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <ReplyDropDown
                            dropdownRef={dropdownRef}
                            setOpenEditor={setOpenEditor}
                            closeDropDown={closeDropDown}
                            DeleteComment={DeleteComment}
                            index={index}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

OptionsButtonReplies.propTypes = {
    dropdownRef: PropTypes.any,
    setOpenEditor: PropTypes.func,
    index: PropTypes.number,
};
