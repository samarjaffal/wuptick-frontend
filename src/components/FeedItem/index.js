import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import calendar from 'dayjs/plugin/calendar';
import { navigate } from '@reach/router';
import { useUser } from '../../hooks/useUser';
import { Image } from '../Image/index';
import { Avatar } from '../Avatar/index';
import { ListContainer } from '../ListContainer/index';
import { Label } from '../Label/index';
import { Colors } from '../../assets/css/colors';
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
    const { generateProfileUrl, generateProjectUrl } = useUser();

    const formatDate = (_date) => {
        dayjs.extend(calendar);
        let dateFormated = dayjs(_date).calendar();
        return dateFormated;
    };

    return (
        <Container>
            <ImageContainer>
                <Avatar
                    description="Feed Image"
                    src={user.avatar}
                    size={50}
                    onClicked={() =>
                        navigate(
                            generateProfileUrl(
                                user.firstName,
                                user.lastName,
                                user.userId
                            )
                        )
                    }
                />
            </ImageContainer>
            <ActitivityContainer>
                <ActivityInfo>
                    <UserInfo>
                        <User
                            to={generateProfileUrl(
                                user.firstName,
                                user.lastName,
                                user.userId
                            )}
                        >
                            {user.name}
                        </User>{' '}
                        <Action>{body.description}: </Action>{' '}
                        {type == 'project' ? (
                            <Item
                                to={
                                    generateProjectUrl(
                                        body.project.projectId
                                    ) || ''
                                }
                            >
                                {body.name}
                            </Item>
                        ) : (
                            <Item to={''}>{body.name}</Item>
                        )}
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
                                    radius="50px"
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
                                <Label
                                    color={Colors.primary}
                                    name={body.project.name}
                                    width="max-content"
                                />
                                {/*  <AnchorProject to="/project/123">
                                    {body.project.name}
                                </AnchorProject> */}
                            </div>
                        </div>
                    )}
                </ListContainer>
            </ActitivityContainer>
        </Container>
    );
};

FeedItem.propTypes = {
    type: PropTypes.string.isRequired,
    dateFilter: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
};
