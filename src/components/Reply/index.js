import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { navigate } from '@reach/router';
import { Editor } from '../Editor/index';
import { Avatar } from '../Avatar/index';
import { OptionsButtonReplies } from '../TaskPanel/OptionsButtonReply/index';
import { useUser } from '../../hooks/useUser';
import { DeleteCommentMutation } from '../../requests/Comment/DeleteCommentMutation';
import {
    ReplyContainer,
    HeaderContainer,
    Description,
    CreatedDate,
    MemberName,
    OptionsContainer,
    Container,
} from './styles';

export const Reply = ({
    reply,
    dropdownRef,
    index,
    itemsRef,
    updateComment,
    taskId,
}) => {
    const {
        generateProfileUrl,
        currentUser,
        currentProject,
        currentModule,
        generateTaskUrl,
    } = useUser();
    const [isEditing, setEditing] = useState(false);

    const url = generateTaskUrl(currentProject._id, currentModule._id, taskId);

    const formatDate = (_date) => {
        let dateFormated = dayjs(_date).format('MMM. D, YYYY h:mm A');
        return dateFormated;
    };

    const toggleEditing = (index, value) => {
        itemsRef.current[index].setEditing(value);
    };

    let mentionsItems = currentProject.members
        ? currentProject.members.map((member) => {
              return {
                  id: member.user._id,
                  name: member.user.name,
                  lastName: member.user.last_name,
              };
          })
        : [];

    const onSave = async (outputHtml, outputData) => {
        console.log('update');
        let outputDataStr = JSON.stringify({ blocks: outputData.blocks });
        let input = {
            taskId: taskId,
            commentId: reply._id,
            comment: outputHtml,
            commentJson: outputDataStr,
            updated_at: new Date(),
            url,
        };
        setEditing(false);
        await updateComment(input);
    };
    return (
        <Container>
            <ReplyContainer
                ref={(el) => (itemsRef.current[index] = { el, setEditing })}
            >
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
                    </div>
                </HeaderContainer>

                <div className="ReplyInfo" style={{ padding: '0 1em' }}>
                    {isEditing ? (
                        <Editor
                            initData={
                                Object.keys(reply.commentJson).length > 0
                                    ? JSON.parse(reply.commentJson)
                                    : null
                            }
                            onSave={onSave}
                            setEditing={setEditing}
                            id="edit-comment-editor"
                            buttonSaveText="Update Comment"
                            mentionItems={mentionsItems}
                        />
                    ) : (
                        <Description>{parse(reply.comment)}</Description>
                    )}
                </div>
            </ReplyContainer>

            {currentUser._id == reply.owner._id && (
                <OptionsContainer>
                    <DeleteCommentMutation>
                        {({ doDeleteComment }) => (
                            <OptionsButtonReplies
                                dropdownRef={dropdownRef}
                                setOpenEditor={toggleEditing}
                                index={index}
                                doDeleteComment={doDeleteComment}
                                taskId={taskId}
                                reply={reply}
                            />
                        )}
                    </DeleteCommentMutation>
                </OptionsContainer>
            )}
        </Container>
    );
};

Reply.propTypes = {
    reply: PropTypes.object,
    dropdownRef: PropTypes.any,
    index: PropTypes.number,
    itemsRef: PropTypes.object,
    updateComment: PropTypes.func,
    taskId: PropTypes.string,
};
