import React from 'react';
import { Ul } from '../../SharedComponents/styles';
import Skeleton from 'react-loading-skeleton';

import { SkeletonStyled, Container } from './styles';

const FileItem = () => {
    return (
        <Container>
            <div style={{ position: 'relative' }}>
                <SkeletonStyled w="50%" />
                <span style={{ position: 'absolute', right: '0' }}>
                    <Skeleton width={22} height={22} circle={true} />
                </span>
            </div>

            <div style={{ marginTop: '0.5em' }}>
                <SkeletonStyled width={280} height={145} />
            </div>
        </Container>
    );
};

export const SkeletonFiles = () => {
    return (
        <div style={{ width: '100%' }}>
            <Ul customProps="display:flex; flex-wrap:wrap">
                {Array(6)
                    .fill()
                    .map((file, index) => (
                        <li key={index}>
                            <FileItem />
                        </li>
                    ))}
            </Ul>
        </div>
    );
};

SkeletonFiles.propTypes = {};
