import React from 'react';
import { Image } from '../Image/index';
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

export const FeedItem = () => {
    return (
        <Container>
            <ImageContainer>
                <Image description="Feed Image" />
            </ImageContainer>
            <ActitivityContainer>
                <ActivityInfo>
                    <UserInfo>
                        <User>Samar Jaffal</User> <Action>commented on</Action>{' '}
                        <Item>Design Logo</Item>
                    </UserInfo>
                    <TimeInfo>
                        <Time>Today 8:00pm</Time>
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
