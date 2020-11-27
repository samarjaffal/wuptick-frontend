import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { Avatar } from '../../../../Avatar/index';
import { InvitationSelect } from '../../../../Selects/InvitationSelect/index';
import { OptionsDropDown as InvitationDropDown } from '../../../../Selects/InvitationSelect/OptionsDropDown/index';
import { useDropdown } from '../../../../../hooks/useDropdown';
import { RemoveInvitationMutation } from '../../../../../requests/project/RemoveInvitationMutation';
import { Colors } from '../../../../../assets/css/colors';
import {
    FlexSpaceBetween,
    FlexCenter,
    Div,
    Ul,
} from '../../../../SharedComponents/styles';
import { MemberEmail, MemberName } from './styles';

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
                    <FlexSpaceBetween customProps="position: relative;">
                        <FlexCenter customProps="margin-bottom: 0.5em;">
                            <Avatar size={30} />
                            <Div customProps="margin-left: 0.5em;">
                                <MemberName>{member.email}</MemberName>
                                <MemberEmail>{member.email}</MemberEmail>
                            </Div>
                        </FlexCenter>

                        <Div>
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
