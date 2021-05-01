import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { OptionsButton } from '../../OptionsButton/index';
import { FileDropDown } from '../FileDropdown';
import { DeleteModal } from '../../Modal/templates/DeleteModal/index';
import { OutsideClick } from '../../OutsideClick/index';
import { useDropdown } from '../../../hooks/useDropdown';

export const OptionsButtonFile = ({
    dropdownRef,
    file,
    doDeleteFile,
    loadingDelete,
}) => {
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();

    let optionsRef = useRef();
    let modalRef = useRef();

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

    const openDeleteModal = () => {
        modalRef.current.openModal();
        closeDropDown();
    };

    const DeleteFile = async () => {
        await doDeleteFile(file._id);
        modalRef.current.closeModal();
    };

    return (
        <>
            <OptionsButton doFunc={openDropdown} elemRef={optionsRef} />
            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <FileDropDown
                            dropdownRef={dropdownRef}
                            DeleteFile={openDeleteModal}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
            <DeleteModal
                modalRef={modalRef}
                title={`Are you about delete this file?`}
                doFunc={DeleteFile}
                loading={loadingDelete}
            />
        </>
    );
};

OptionsButtonFile.propTypes = {
    dropdownRef: PropTypes.any,
    file: PropTypes.object,
    doDeleteFile: PropTypes.func,
};
