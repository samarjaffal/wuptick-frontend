import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { MemberListItem } from '../../../../Member/MemberListItem/index';
import { OptionsDropDown as RoleDropDown } from '../../../../RolesSelect/OptionsDropDown/index';
import { RolesSelect } from '../../../../RolesSelect/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { useUser } from '../../../../../hooks/useUser';
import { OutsideClick } from '../../../../OutsideClick/index';
import { RemoveMemberMutation } from '../../../../../requests/project/RemoveMemberMutation';
import { UpdateMemberRoleMutation } from '../../../../../requests/project/UpdateMemberRoleMutation';
import { Div, FlexSpaceBetween, Ul } from '../../../../SharedComponents/styles';

export const MembersList = ({ members }) => {
    const [_members, setMembers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const { currentProject } = useUser();
    const {
        setRef,
        currentElemRef,
        setPositionDropDown,
        openDropCallBack,
    } = useDropdown();

    useEffect(() => {
        setMembers(members);
    }, [members]);

    const setOption = (value) => {
        currentElemRef.current.setOption(value);
    };

    const setUserCallBack = (user) => {
        setSelectedUser(user);
    };

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    return (
        <Ul>
            {_members.map((member, index) => (
                <li key={index}>
                    <FlexSpaceBetween customProps="@media (max-width: 425px) {flex-wrap:wrap}">
                        <MemberListItem member={member.user} />
                        <Div customProps="@media (max-width: 425px) {width:100%;}">
                            <UpdateMemberRoleMutation>
                                {({ doUpdateRole }) => (
                                    <RolesSelect
                                        role={member.role}
                                        doUpdate={doUpdateRole}
                                        projectId={currentProject._id}
                                        userId={member.user._id}
                                        openDropCallBack={handleDropDown}
                                        setRef={setRef}
                                        ref={currentElemRef}
                                        setPositionCallBack={
                                            setPositionDropDown
                                        }
                                        setUserCallBack={setUserCallBack}
                                    />
                                )}
                            </UpdateMemberRoleMutation>
                        </Div>
                    </FlexSpaceBetween>
                </li>
            ))}
            {ReactDom.createPortal(
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <RemoveMemberMutation>
                        {({ doRemoveMember }) => (
                            <RoleDropDown
                                setOption={setOption}
                                doRemoveMember={doRemoveMember}
                                userId={selectedUser}
                            />
                        )}
                    </RemoveMemberMutation>
                </OutsideClick>,
                document.getElementById('dropwdown-app')
            )}
        </Ul>
    );
};

MembersList.propTypes = {
    members: PropTypes.array,
};
