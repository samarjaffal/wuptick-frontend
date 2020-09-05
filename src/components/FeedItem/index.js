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
    Title,
    ItemContainer,
    CommentContainer,
    CommentInfo,
    CommentText,
} from './styles';

export const FeedItem = ({ type, dateFilter, user, body }) => {
    const formatDate = (_date) => {
        dayjs.extend(calendar);
        let dateFormated = dayjs(_date).calendar();
        return dateFormated;
    };

    return (
        <Container>
            <ImageContainer>
                <Avatar description="Feed Image" src={user.avatar} size={50} />
            </ImageContainer>
            <ActitivityContainer>
                <ActivityInfo>
                    <UserInfo>
                        <User>{user.name}</User>{' '}
                        <Action>{body.description}: </Action>{' '}
                        <Item>{body.name}</Item>
                    </UserInfo>
                    <TimeInfo>
                        <Time>{formatDate(dateFilter)}</Time>
                    </TimeInfo>
                </ActivityInfo>
                <ListContainer shadow={true}>
                    <ItemContainer>
                        {type == 'project' ? (
                            <Image
                                src={body.project.image}
                                size={30}
                                margin="0 0.5em 0.5em 0"
                            />
                        ) : (
                            ''
                        )}

                        <Title>{body.name}</Title>
                    </ItemContainer>

                    <Text>{body.info ? body.info : ''}</Text>

                    {body.comment !== null && (
                        <CommentContainer>
                            <CommentInfo>
                                <Image
                                    description="Comment Avatar"
                                    src={user.avatar}
                                    margin="0 0.5em 0 0"
                                    size={30}
                                    radius={50}
                                />
                                <CommentText>
                                    {body.comment.comment}
                                </CommentText>
                            </CommentInfo>
                        </CommentContainer>
                    )}

                    {body.project.name && (
                        <div>
                            <Divider />
                            <div>
                                <AnchorProject to="/project/123">
                                    {body.project.name}
                                </AnchorProject>
                            </div>
                        </div>
                    )}
                </ListContainer>
            </ActitivityContainer>
        </Container>
    );
};
