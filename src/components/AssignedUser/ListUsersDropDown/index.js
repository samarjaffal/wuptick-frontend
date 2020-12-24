import React, { useEffect, useState } from 'react';
import List from 'list.js';
import { Dropdown } from '../../Dropdrown/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { Avatar } from '../../Avatar/index';
import { MemberListElement } from '../../MemberListElement/index';
import { Colors } from '../../../assets/css/colors';
import { Ul } from '../../SharedComponents/styles';
import { useUser } from '../../../hooks/useUser';
import PropTypes from 'prop-types';
import { InputSearch, MembersContainer } from './styles';

export const ListUsersDropDown = () => {
    const { open, position, setOpen } = useDropdown();
    const { currentProject } = useUser();
    const [members, setMembers] = useState([]);

    const options = {
        item: 'member-item',
        valueNames: ['memberName', 'memberEmail'],
    };

    const renderMemberList = (members) => {
        const memberList = (
            <MembersContainer>
                <Ul className="list">
                    {members.map((member, index) => (
                        <li key={index} id="member-item">
                            <MemberListElement member={member} />
                        </li>
                    ))}
                </Ul>
            </MembersContainer>
        );
        new List('members-list', options);
        return memberList;
    };

    useEffect(() => {
        if (currentProject.members.length > 0) {
            let newMembers = currentProject.members.map(
                (member) => member.user
            );
            setMembers(newMembers);
        }
    }, [currentProject.members]);

    return (
        <Dropdown
            open={open}
            width="300px"
            transform="-80%"
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
                    />
                </div>
                {renderMemberList(members)}
                <div style={{ display: 'none' }}>
                    <li id="member-item">
                        <div className="memberName"></div>
                        <div className="memberEmail"></div>
                    </li>
                </div>
            </div>
        </Dropdown>
    );
};

ListUsersDropDown.propTypes = {};
