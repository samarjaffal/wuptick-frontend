import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { MemberListItem } from '../../../../Member/MemberListItem/index';
import { InvitationSelect } from '../../../../Selects/InvitationSelect/index';
import { OptionsDropDown as InvitationDropDown } from '../../../../Selects/InvitationSelect/OptionsDropDown/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { RemoveInvitationMutation } from '../../../../../requests/project/RemoveInvitationMutation';
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

    return (
        <Ul>
            {members.map((member, index) => (
                <li key={index}>
                    <FlexSpaceBetween customProps="position: relative; @media (max-width: 425px) {flex-wrap:wrap}">
                        <MemberListItem member={member.user} />
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
            ))}
            {ReactDom.createPortal(
                <RemoveInvitationMutation>
                    {({ doRemoveInvitation }) => (
                        <InvitationDropDown
                            userId={selectedUser}
                            doRemoveInvitation={doRemoveInvitation}
                        />
                    )}
                </RemoveInvitationMutation>,
                document.getElementById('dropwdown-app')
            )}
        </Ul>
    );
};

InvitationList.propTypes = {
    members: PropTypes.array,
};