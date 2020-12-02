import React from 'react';
import PropTypes from 'prop-types';
import { MemberListItem } from '../../../../Member/MemberListItem/index';
import { Colors } from '../../../../../assets/css/colors';
import { Ul, FlexSpaceBetween, Div } from '../../../../SharedComponents/styles';
import { RemoveButton, MemberContainer } from './styles';

export const MembersList = ({ members }) => {
    return (
        <Ul>
            {members.map((member, index) => (
                <li key={index}>
                    <MemberContainer>
                        <MemberListItem member={member} />
                        <Div onClick={() => console.log('removed')}>
                            <RemoveButton>Remove</RemoveButton>
                        </Div>
                    </MemberContainer>
                </li>
            ))}
        </Ul>
    );
};

MembersList.propTypes = {
    members: PropTypes.array,
};
