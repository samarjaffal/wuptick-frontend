import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { FlexCenter } from '../../SharedComponents/styles';
import { Reply } from '../../Reply/index';
import { NewReply } from '../NewReply/index';
import { ReplyDropDown } from '../ReplyDropDown/index';
import { OutsideClick } from '../../OutsideClick/index';
import { GetCommentsForTaskQuery } from '../../../requests/Comment/GetCommentsForTaskQuery';
import { CreateCommentMutation } from '../../../requests/Comment/CreateCommentMutation';
import { RepliesDiv, ReplySectionTitle, NoComments } from './styles';

export const RepliesSection = ({ task }) => {
    let dropdownRef = useRef(null);

    const handleDropDown = (value = null) => {
        let open = value == null ? true : value;
        open
            ? dropdownRef.current.openDropdown()
            : dropdownRef.current.closeDropdown();
    };

    return (
        <div className="RepliesSection" style={{ marginTop: '25px' }}>
            {/* <Hr /> */}
            <div className="RepliesContainer" style={{ paddingLeft: '40px' }}>
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
                        return replies.length > 0 ? (
                            replies.map((replyObj) =>
                                replyObj.comments.map((reply, index) => (
                                    <Reply
                                        key={index}
                                        reply={reply}
                                        dropdownRef={dropdownRef}
                                    />
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
            {ReactDom.createPortal(
                <OutsideClick setLocalDropDownState={handleDropDown}>
                    <ReplyDropDown dropdownRef={dropdownRef} />
                </OutsideClick>,
                document.getElementById('dropwdown-app')
            )}
        </div>
    );
};

RepliesSection.propTypes = {
    task: PropTypes.object,
};
