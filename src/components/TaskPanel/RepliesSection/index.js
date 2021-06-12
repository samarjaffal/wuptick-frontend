import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FlexCenter } from '../../SharedComponents/styles';
import { Reply } from '../../Reply/index';
import { NewReply } from '../NewReply/index';
import { GetCommentsForTaskQuery } from '../../../requests/Comment/GetCommentsForTaskQuery';
import { EditCommentMutation } from '../../../requests/Comment/EditCommentMutation';
import { CreateCommentMutation } from '../../../requests/Comment/CreateCommentMutation';
import { RepliesDiv, ReplySectionTitle, NoComments, Container } from './styles';

export const RepliesSection = ({ task }) => {
    let dropdownRef = useRef(null);
    const itemsRef = useRef([]);
    return (
        <div className="RepliesSection" style={{ marginTop: '25px' }}>
            {/* <Hr /> */}
            <Container id="RepliesContainer">
                <RepliesDiv>
                    <FlexCenter customProps="margin-top:1em;">
                        {/* <Icon width="25px" height="25px" viewBox="0 0 25 25" /> */}
                        <ReplySectionTitle>Replies</ReplySectionTitle>
                    </FlexCenter>
                </RepliesDiv>
                <CreateCommentMutation>
                    {({ doCreateComment }) => (
                        <NewReply createComment={doCreateComment} task={task} />
                    )}
                </CreateCommentMutation>

                <GetCommentsForTaskQuery taskId={task._id}>
                    {({ data }) => {
                        const replies = data.getCommentsForTask;
                        console.log(replies, 'replies');
                        return (
                            <EditCommentMutation>
                                {({ doUpdateComment }) =>
                                    replies.length > 0 ? (
                                        replies.map((replyObj) =>
                                            replyObj.comments.map(
                                                (reply, index) => (
                                                    <Reply
                                                        key={index}
                                                        index={index}
                                                        reply={reply}
                                                        dropdownRef={
                                                            dropdownRef
                                                        }
                                                        isActiveUser={reply.owner.status === 'active'}
                                                        itemsRef={itemsRef}
                                                        taskId={task._id}
                                                        updateComment={
                                                            doUpdateComment
                                                        }
                                                    />
                                                )
                                            )
                                        )
                                    ) : (
                                        <NoComments>
                                            This task has no replies yet...
                                        </NoComments>
                                    )
                                }
                            </EditCommentMutation>
                        );
                    }}
                </GetCommentsForTaskQuery>
                <div id="dropdownRender"></div>
            </Container>
        </div>
    );
};

RepliesSection.propTypes = {
    task: PropTypes.object,
};
