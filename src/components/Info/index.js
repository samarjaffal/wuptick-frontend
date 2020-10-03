import React from 'react';
import { Image } from '../Image/index';
import { Colors } from '../../assets/css/colors';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
    Container,
    Title,
    OwnerAnchor,
    Details,
    DetailsContainer,
    Clock,
} from './styles';

export const Info = ({ name, owner, time, image, description, profileUrl }) => {
    let date = dayjs(time);
    dayjs.extend(relativeTime);

    return (
        <Container>
            {image && <Image src={image} description={description} />}
            <DetailsContainer>
                <Title>{name || 'Lorem ipsum dolor'}</Title>
                <OwnerAnchor to={profileUrl}>
                    Owner:{' '}
                    <span style={{ color: Colors.primary }}>{owner}</span>
                </OwnerAnchor>
                <Details>
                    <Clock icon="clock" />
                    {dayjs(date.format()).fromNow() || 'No time...'}
                </Details>
            </DetailsContainer>
        </Container>
    );
};

Info.propTypes = {
    name: PropTypes.string,
    owner: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};
