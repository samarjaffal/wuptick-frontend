import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { OutsideClick } from '../../../OutsideClick/index';
import { useDropdown } from '../../../../hooks/useDropdown';
import { CollaboratorsDropDown } from '../Dropdowns/CollaboratorsDropdown/index';
import { Avatar } from '../../../Avatar/index';
import {
    UserIconContainer,
    UserIconSVG,
} from '../../../SharedComponents/styles';

export const Collaborators = ({ task }) => {
    const elementRef = useRef();
    const dropdownRef = useRef();
    const [renderDropDown, setRenderDropdown] = useState(false);
    const { handleDropDown, handleDropDownOutsideClick } = useDropdown();

    useEffect(() => {}, [task.collaborators]);

    const initDropDown = () => {
        document.getElementById('dropwdown-app').innerHTML = '';
        setRenderDropdown(true);
    };

    const openDropdown = async () => {
        await initDropDown();
        handleDropDown(true, dropdownRef, elementRef);
    };

    const closeDropDown = () => {
        handleDropDownOutsideClick(false, dropdownRef);
        setRenderDropdown(false);
        console.log('close');
    };

    const handleOutsideClick = () => {
        closeDropDown();
    };

    const renderItems = () => {
        return task.collaborators.length == 0 ? (
            <div
                style={{
                    margin: '0 4px',
                    display: 'flex',
                }}
            >
                <UserIconContainer customProps="line-height: 2.2;">
                    <UserIconSVG
                        width="14px"
                        height="14px"
                        viewBox="0 0 25 25"
                    />
                </UserIconContainer>
            </div>
        ) : (
            task.collaborators.slice(0, size).map((member, index) => (
                <div
                    key={index}
                    style={{
                        margin: '0 4px',
                        display: 'flex',
                    }}
                >
                    <Avatar size={25} src={member.avatar} hide={false} />
                </div>
            ))
        );
    };

    const size = 3;
    return (
        <>
            <div
                ref={elementRef}
                onClick={() => openDropdown()}
                style={{ display: 'flex' }}
            >
                {Object.keys(task).length > 0 && renderItems()}
            </div>
            {renderDropDown &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleOutsideClick}>
                        <CollaboratorsDropDown
                            collaborators={task.collaborators || []}
                            dropdownRef={dropdownRef}
                            closeDropDown={closeDropDown}
                        />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

Collaborators.propTypes = {
    task: PropTypes.object,
};
