import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { navigate } from '@reach/router';
import { Avatar } from '../Avatar/index';
import { OptionsButtonReplies } from '../TaskPanel/OptionsButtonReply/index';
import { useUser } from '../../hooks/useUser';
import {
    ReplyContainer,
    HeaderContainer,
    Description,
    CreatedDate,
    MemberName,
} from './styles';

export const Reply = ({ reply, dropdownRef }) => {
    const { generateProfileUrl } = useUser();

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D, YYYY h:mm A');
        return dateFormated;
    };

    return (
        <ReplyContainer>
            <HeaderContainer>
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
                <MemberName>
                    {reply.owner.name} {reply.owner.last_name}
                </MemberName>
                <div
                    style={{
                        marginLeft: 'auto',
                        paddingRight: '0.5em',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <CreatedDate>
                        {' '}
                        {reply.created_at !== null
                            ? formatDate(reply.created_at)
                            : ''}
                    </CreatedDate>
                    <OptionsButtonReplies dropdownRef={dropdownRef} />
                </div>
            </HeaderContainer>

            <div className="ReplyInfo" style={{ padding: '0 1em' }}>
                <Description>{parse(reply.comment)}</Description>
            </div>
        </ReplyContainer>
    );
};

Reply.propTypes = {
    reply: PropTypes.object,
    dropdownRef: PropTypes.any,
};
