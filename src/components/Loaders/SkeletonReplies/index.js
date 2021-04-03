import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonAvatar } from '../SkeletonAvatar/index';
import {
    Container,
    HeaderContainer,
    ReplyContainer,
    SkeletonStyled,
    DescriptionContainer,
} from './styles';
export const SkeletonReplies = () => {
    const descriptions = [60, 40];

    const Reply = ({ descriptionHeight = 40 }) => {
        return (
            <ReplyContainer>
                <HeaderContainer>
                    <div
                        style={{ marginRight: '0.5em', marginBottom: '0.5em' }}
                    >
                        <SkeletonAvatar />
                    </div>
                    <SkeletonStyled w="100px" />
                </HeaderContainer>
                <DescriptionContainer>
                    <SkeletonStyled w="100%" height={descriptionHeight} />
                </DescriptionContainer>
            </ReplyContainer>
        );
    };

    return (
        <Container>
            {descriptions.map((description, index) => (
                <Reply descriptionHeight={description} key={index} />
            ))}
        </Container>
    );
};

SkeletonReplies.propTypes = {};
