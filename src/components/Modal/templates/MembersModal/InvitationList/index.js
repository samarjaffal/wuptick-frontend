import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { MemberListItem } from '../../../../Member/MemberListItem/index';
import { InvitationSelect } from '../../../../Selects/InvitationSelect/index';
import { OptionsDropDown as InvitationDropDown } from '../../../../Selects/InvitationSelect/OptionsDropDown/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { RemoveInvitationMutation } from '../../../../../requests/project/RemoveInvitationMutation';
import { OutsideClick } from '../../../../OutsideClick/index';
import { Colors } from '../../../../../assets/css/colors';
import { FlexSpaceBetween, Div, Ul } from '../../../../SharedComponents/styles';

export const InvitationList = ({ members }) => {
    const [selectedUser, setSelectedUser] = useState();
    const {
        setRef,
        currentElemRef,
        setPositionDropDown,
        openDropCallBack,
    } = useDropdown();

    const setUserCallBack = (user) => {
        setSelectedUser(user);
    };

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    return (
        <Ul>
            {members.map((member, index) => {
                let _member = {
                    name: member.email,
                    last_name: null,
                    avatar: null,
                    email: member.email,
                    color: Colors.secondary,
                };
                return (
                    <li key={index}>
                        <FlexSpaceBetween customProps="position: relative; @media (max-width: 425px) {flex-wrap:wrap}">
                            <MemberListItem member={_member} />
                            <Div customProps=" @media (max-width: 425px) {width:100%;}">
                                <InvitationSelect
                                    color={Colors.yellow}
                                    ref={currentElemRef}
                                    setRef={setRef}
                                    setPositionCallBack={setPositionDropDown}
                                    openDropCallBack={openDropCallBack}
                                    setUserCallBack={setUserCallBack}
                                    userId={member._id}
                                />
                            </Div>
                        </FlexSpaceBetween>
                    </li>
                );
            })}
            {ReactDom.createPortal(
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <RemoveInvitationMutation>
                        {({ doRemoveInvitation }) => (
                            <InvitationDropDown
                                userId={selectedUser}
                                doRemoveInvitation={doRemoveInvitation}
                            />
                        )}
                    </RemoveInvitationMutation>
                </OutsideClick>,
                document.getElementById('dropwdown-app')
            )}
        </Ul>
    );
};

InvitationList.propTypes = {
    members: PropTypes.array,
};
