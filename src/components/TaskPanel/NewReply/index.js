import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../SharedComponents/styles';
import { Avatar } from '../../Avatar/index';
import { Editor } from '../../Editor/index';
import { Me } from '../../Me/index';
import { useUser } from '../../../hooks/useUser';
import { SkeletonAvatar } from '../../Loaders/SkeletonAvatar/index';
import { Colors } from '../../../assets/css/colors';
import { NewReplyContainer } from './styles';

export const NewReply = ({ task, createComment }) => {
    let inputRef = useRef(null);
    const {
        currentUser,
        currentProject,
        currentModule,
        generateTaskUrl,
    } = useUser();
    const [isFocused, setFocus] = useState(false);

    const url = generateTaskUrl(
        currentProject._id,
        currentModule._id,
        task._id
    );

    let mentionsItems = currentProject.members
        ? currentProject.members.map((member) => {
              return {
                  id: member.user._id,
                  name: member.user.name,
                  lastName: member.user.last_name,
              };
          })
        : [];

    const toggleFocus = () => {
        console.log('toggleFocus');
        setFocus(inputRef.current == document.activeElement ? true : false);
    };

    useEffect(() => {}, [isFocused]);

    const onSave = async (outputHtml, outputData) => {
        let outputDataStr = JSON.stringify({ blocks: outputData.blocks });
        let input = {
            task: {
                _id: task._id,
            },
            comments: {
                owner: {
                    _id: currentUser._id,
                },
                comment: outputHtml,
                commentJson: outputDataStr,
                created_at: new Date(),
            },
            url,
        };
        setFocus(false);
        await createComment(input);
    };

    return (
        <NewReplyContainer isFocused={isFocused}>
            <Me loader={SkeletonAvatar} loaderProps={{ qty: 1 }}>
                {({ avatar }) => (
                    <Avatar
                        size={30}
                        src={avatar}
                        hide={false}
                        margin={isFocused ? '20px 0 0 0' : '0'}
                    />
                )}
            </Me>
            {!isFocused ? (
                <Input
                    type="text"
                    placeholder="Add a new reply 💬"
                    customProps={`border: 1px solid ${Colors.backgroud};border-radius: 8px; padding: 0.5em; margin-left:0.5em`}
                    onClick={() => toggleFocus()}
                    ref={inputRef}
                />
            ) : (
                <div
                    className="EditorContainer"
                    style={{ width: '100%', marginLeft: '1em' }}
                >
                    <Editor
                        id="comment-editor"
                        initData={null}
                        onSave={onSave}
                        setEditing={setFocus}
                        buttonSaveText="Send Reply"
                        placeholder="Add a new reply 💬"
                        mentionItems={mentionsItems}
                    />
                </div>
            )}
        </NewReplyContainer>
    );
};

NewReply.propTypes = {
    createComment: PropTypes.func,
    task: PropTypes.object,
};
