import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
    Profile as ProfileStyled,
    ProfileInfoContainer,
    ProfileInfo,
} from './styles';
export const SkeletonInfoProfile = () => {
    return (
        <ProfileInfoContainer>
            <ProfileStyled>
                <Skeleton circle={true} width={100} height={100} />
                <ProfileInfo>
                    <Skeleton height={10} width={'100%'} />
                    <Skeleton height={10} width={'100%'} />
                    <Skeleton height={10} width={'100%'} />
                </ProfileInfo>
            </ProfileStyled>
        </ProfileInfoContainer>
    );
};
