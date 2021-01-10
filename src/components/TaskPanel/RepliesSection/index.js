import React from 'react';
import PropTypes from 'prop-types';
import { FlexCenter } from '../../SharedComponents/styles';
import { Reply } from '../../Reply/index';
import { RepliesDiv, Hr, Icon, ReplySectionTitle } from './styles';

export const RepliesSection = () => {
    return (
        <div className="RepliesSection">
            <Hr />
            <div className="RepliesContainer" style={{ paddingLeft: '40px' }}>
                <RepliesDiv>
                    <FlexCenter customProps="margin-top:1em;">
                        <Icon width="25px" height="25px" viewBox="0 0 25 25" />
                        <ReplySectionTitle>Replies</ReplySectionTitle>
                    </FlexCenter>
                </RepliesDiv>
                {Array(2)
                    .fill()
                    .map((reply, index) => (
                        <Reply key={index} />
                    ))}
            </div>
        </div>
    );
};

RepliesSection.propTypes = {};
