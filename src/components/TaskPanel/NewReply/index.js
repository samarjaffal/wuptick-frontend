import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../SharedComponents/styles';
import { Avatar } from '../../Avatar/index';
import { Me } from '../../Me/index';
import { SkeletonAvatar } from '../../Loaders/SkeletonAvatar/index';
import { Colors } from '../../../assets/css/colors';

export const NewReply = () => {
    return (
        <div
            className="NewReplyContainer"
            style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
            }}
        >
            <Me loader={SkeletonAvatar} loaderProps={{ qty: 1 }}>
                {({ avatar }) => <Avatar size={30} src={avatar} />}
            </Me>
            <Input
                type="text"
                placeholder="Add a new reply 💬"
                customProps={`border: 1px solid ${Colors.backgroud};border-radius: 8px; padding: 0.5em; margin-left:0.5em`}
            />
        </div>
    );
};

NewReply.propTypes = {};
