import React from 'react';
import PropTypes from 'prop-types';
import { FlexCenter } from '../../SharedComponents/styles';
import { RepliesDiv, Hr, CommentIconSVG, CommentSectionTitle } from './styles';

export const RepliesSection = () => {
    return (
        <div className="RepliesSection">
            <div className="RepliesContainer">
                <RepliesDiv>
                    <Hr />
                    <FlexCenter customProps="margin-top:1em;">
                        <CommentIconSVG
                            width="25px"
                            height="25px"
                            viewBox="0 0 25 25"
                        />
                        <CommentSectionTitle>Replies</CommentSectionTitle>
                    </FlexCenter>
                </RepliesDiv>
            </div>
        </div>
    );
};

RepliesSection.propTypes = {};
