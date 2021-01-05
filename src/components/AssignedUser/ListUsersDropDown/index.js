import React, { useEffect, useState, useRef } from 'react';
import { Dropdown } from '../../Dropdrown/index';
import { useDropdown } from '../../../hooks/useDropdown';
import { useUser } from '../../../hooks/useUser';
import { MemberListElement } from '../../MemberListElement/index';
import { AssignTaskMutation } from '../../../requests/Task/AssignTaskMutation';
import { Colors } from '../../../assets/css/colors';
import { Ul } from '../../SharedComponents/styles';
import {
    InputSearch,
    MembersContainer,
    MemberItem,
    Span,
    NotAssigned,
} from './styles';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const RenderMemberList = ({ members }) => {
    const { setOpen } = useDropdown();
    const { currentTask } = useUser();
    return (
        <MembersContainer>
            <AssignTaskMutation>
                {({ doAssignTask }) => (
                    <Ul className="list">
                        <NotAssigned
                            id="member-item"
                            onClick={() => {
                                doAssignTask(currentTask._id, null);
                                setOpen(false);
                            }}
                        >
                            <Span>Not assigned</Span>
                        </NotAssigned>
                        {members.map((member, index) => (
                            <MemberItem
                                key={index}
                                id="member-item"
                                onClick={() => {
                                    doAssignTask(currentTask._id, member._id);
                                    setOpen(false);
                                }}
                            >
                                <MemberListElement member={member} />
                            </MemberItem>
                        ))}
                    </Ul>
                )}
            </AssignTaskMutation>
        </MembersContainer>
    );
};

export const ListUsersDropDown = () => {
    const { open, position } = useDropdown();
    const { currentProject } = useUser();
    const [items, setItems] = useState([]);
    const [members, setMembers] = useState([]);
    let inputRef = useRef(null);

    useEffect(() => {
        if (Object.keys(currentProject).length > 0) {
            let newMembers = currentProject.members.map(
                (member) => member.user
            );
            setItems(newMembers);
            setMembers(newMembers);
        }
    }, [currentProject.members]);

    const getSuggestions = (defaultValue) => {
        let value = inputRef.current.value;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const escapedValue = escapeRegexCharacters(inputValue);
        const regex = new RegExp('^' + escapedValue, 'i');
        let newMembers =
            inputLength === 0
                ? defaultValue
                : members.filter(
                      (member) =>
                          regex.test(member.name) ||
                          regex.test(member.last_name) ||
                          regex.test(member.email)
                  );
        setItems(newMembers);
    };

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
                        ref={inputRef}
                        onChange={() => getSuggestions(members)}
                    />
                </div>
                <RenderMemberList members={items} />
            </div>
        </Dropdown>
    );
};

ListUsersDropDown.propTypes = {};
