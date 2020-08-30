import React from 'react';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { Image } from '../Image/index';
import { Avatar } from '../Avatar/index';
import { ListContainer } from '../ListContainer/index';
import {
    Container,
    ImageContainer,
    ActitivityContainer,
    ActivityInfo,
    UserInfo,
    TimeInfo,
    AnchorProject,
    Divider,
    Text,
    User,
    Action,
    Item,
    Time,
} from './styles';

export const FeedItem = ({
    user,
    userAvatar,
    description,
    activityName,
    dateFilter,
}) => {
    const formatDate = (_date) => {
        dayjs.extend(calendar);
        let dateFormated = dayjs(_date).calendar();
        return dateFormated;
    };

    return (
        <Container>
            <ImageContainer>
                <Avatar description="Feed Image" src={userAvatar} size={50} />
            </ImageContainer>
            <ActitivityContainer>
                <ActivityInfo>
                    <UserInfo>
                        {/* <User>{user}</User> <Action>commented on</Action>{' '} */}
                        <User>{user}</User> <Action>{description}: </Action>{' '}
                        <Item>{activityName}</Item>
                    </UserInfo>
                    <TimeInfo>
                        {/* <Time>Today 8:00pm</Time> */}
                        <Time>{formatDate(dateFilter)}</Time>
                    </TimeInfo>
                </ActivityInfo>
                <ListContainer shadow={true}>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Optio atque sed enim vero dolorum dolore. Est
                        sequi vel, iusto quae recusandae doloribus officiis
                        asperiores blanditiis, incidunt, voluptates vitae
                        voluptatum...
                    </Text>

                    <div>
                        <Divider />
                        <div>
                            <AnchorProject to="/">Project</AnchorProject>
                        </div>
                    </div>
                </ListContainer>
            </ActitivityContainer>
        </Container>
    );
};
