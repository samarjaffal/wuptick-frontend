import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
    SkeletonStyled,
    TaskDescription,
    DescriptionContainer,
    Container,
    ButtonsContainer,
} from './styles';

export const SkeletonTaskDescription = () => {
    return (
        <Container>
            <TaskDescription>
                <div className="AvatarContainer">
                    <Skeleton circle={true} width={30} height={30} />
                </div>
                <DescriptionContainer>
                    <SkeletonStyled w="50%" />
                    <SkeletonStyled w="100%" height={120} />
                    <ButtonsContainer>
                        <div style={{ marginRight: '12px' }}>
                            <SkeletonStyled w="36px" height={36} />
                        </div>
                        <div style={{ marginRight: '12px' }}>
                            <SkeletonStyled w="36px" height={36} />
                        </div>
                        <div style={{ marginRight: '12px' }}>
                            <SkeletonStyled w="36px" height={36} />
                        </div>
                    </ButtonsContainer>
                </DescriptionContainer>
            </TaskDescription>
        </Container>
    );
};

SkeletonTaskDescription.propTypes = {};
