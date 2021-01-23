import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { navigate } from '@reach/router';
import { Avatar } from '../Avatar/index';
import { useUser } from '../../hooks/useUser';
import { Description, CreatedDate, MemberName } from './styles';

export const Reply = ({ reply }) => {
    const { generateProfileUrl } = useUser();

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D, YYYY h:mm A');
        return dateFormated;
    };

    return (
        <div
            className="ReplyContainer"
            style={{ marginBottom: '1em', display: 'flex' }}
        >
            <div className="AvatarContainer">
                <Avatar
                    size={25}
                    src={reply.owner.avatar}
                    onClicked={() =>
                        navigate(
                            generateProfileUrl(
                                reply.owner.name,
                                reply.owner.last_name,
                                reply.owner._id
                            )
                        )
                    }
                />
            </div>
            <div className="ReplyInfo" style={{ marginLeft: '0.5em' }}>
                <MemberName>
                    {reply.owner.name} {reply.owner.last_name}
                </MemberName>
                <Description>{reply.comment}</Description>
                <div>
                    <CreatedDate>
                        {' '}
                        {reply.created_at !== null
                            ? formatDate(reply.created_at)
                            : ''}
                    </CreatedDate>
                </div>
            </div>
        </div>
    );
};

Reply.propTypes = {
    reply: PropTypes.object,
};
