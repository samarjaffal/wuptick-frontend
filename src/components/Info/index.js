import React, { Fragment } from 'react';
import { Container, Title, Details, DetailsContainer, Clock } from './styles';
import { Image } from '../Image/index';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const Info = ({ name, owner, time, image, description }) => {
    let date = dayjs(time);
    dayjs.extend(relativeTime);
    return (
        <Fragment>
            <Container>
                {image && <Image src={image} description={description} />}
                <DetailsContainer>
                    <Title>{name || 'Lorem ipsum dolor'}</Title>
                    <Details>Owner: {owner}</Details>
                    <Details>
                        <Clock icon="clock" />
                        {dayjs(date.format()).fromNow() || 'No time...'}
                    </Details>
                </DetailsContainer>
            </Container>
        </Fragment>
    );
};

Info.propTypes = {
    name: PropTypes.string,
    owner: PropTypes.string,
    time: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};
