import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Ul } from '../../SharedComponents/styles';
import { SkeletonStyled, Container, ProjectItem } from './styles';

export const SkeletonProjectsSidebar = () => {
    return (
        <Container>
            <div>
                <SkeletonStyled w={130} />
            </div>
            <div>
                <Ul>
                    {Array(6)
                        .fill()
                        .map((item, index) => (
                            <ProjectItem key={index}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div style={{ marginRight: '0.5em' }}>
                                        <Skeleton width={22} height={22} />
                                    </div>
                                    <SkeletonStyled w={170} />
                                </div>
                            </ProjectItem>
                        ))}
                </Ul>
            </div>
        </Container>
    );
};

SkeletonProjectsSidebar.propTypes = {};
