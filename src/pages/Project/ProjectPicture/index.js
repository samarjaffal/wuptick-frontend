import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../../components/Image/index';
import { useAvatar } from '../../../hooks/useAvatar';
import { ImageContainer } from './styles';

export const ProjectPicture = ({ project }) => {
    const { generateProjectAvatar } = useAvatar({});

    let image = generateProjectAvatar(project);

    return (
        <ImageContainer>
            <Image size={100} description="Project Image" src={image} />
        </ImageContainer>
    );
};

ProjectPicture.propTypes = {
    project: PropTypes.object,
};
