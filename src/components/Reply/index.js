import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar/index';
import { Description, CreatedDate, MemberName } from './styles';

export const Reply = () => {
    return (
        <div
            className="ReplyContainer"
            style={{ marginBottom: '1em', display: 'flex' }}
        >
            <div className="AvatarContainer">
                <Avatar size={25} />
            </div>
            <div className="ReplyInfo" style={{ marginLeft: '0.5em' }}>
                <MemberName>Samar Jaffal</MemberName>
                <Description>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </Description>
                <div>
                    <CreatedDate>Oct. 06 4:35 pm</CreatedDate>
                </div>
            </div>
        </div>
    );
};

Reply.propTypes = {};
