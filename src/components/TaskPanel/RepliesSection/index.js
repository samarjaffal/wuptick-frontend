import React from 'react';
import PropTypes from 'prop-types';
import { FlexCenter } from '../../SharedComponents/styles';
import { Reply } from '../../Reply/index';
import { GetCommentsForTaskQuery } from '../../../requests/Comment/GetCommentsForTaskQuery';
import { RepliesDiv, Hr, Icon, ReplySectionTitle, NoComments } from './styles';

export const RepliesSection = ({ task }) => {
    return (
        <div className="RepliesSection" style={{ marginTop: '25px' }}>
            <Hr />
            <div className="RepliesContainer" style={{ paddingLeft: '40px' }}>
                <RepliesDiv>
                    <FlexCenter customProps="margin-top:1em;">
                        <Icon width="25px" height="25px" viewBox="0 0 25 25" />
                        <ReplySectionTitle>Replies</ReplySectionTitle>
                    </FlexCenter>
                </RepliesDiv>
                <GetCommentsForTaskQuery taskId={task._id}>
                    {({ data }) => {
                        const replies = data.getCommentsForTask;
                        console.log(replies, 'replies');
                        return replies.length > 0 ? (
                            replies.map((replyObj) =>
                                replyObj.comments.map((reply, index) => (
                                    <Reply key={index} reply={reply} />
                                ))
                            )
                        ) : (
                            <NoComments>
                                This task has no replies yet...
                            </NoComments>
                        );
                    }}
                </GetCommentsForTaskQuery>
            </div>
        </div>
    );
};

RepliesSection.propTypes = {
    task: PropTypes.object,
};
