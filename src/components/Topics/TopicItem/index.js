import React from 'react';
import { ListContainer } from '../../ListContainer/index';
import { Avatar } from '../../Avatar/index';
import {
    HeaderContainer,
    NotificationContainer,
    Notification,
    Title,
    Info,
    Description,
} from './styles';
export const TopicItem = () => {
    return (
        <ListContainer>
            <HeaderContainer>
                <Avatar size={25} margin="0 0.5em 0 0" />
                <div className="TitleContainer">
                    <Title>Topic 1 About Something.</Title> <br />
                    <Info>Samar Jaffal -</Info> <Info>13/05/2020 11:00pm</Info>
                </div>
                <NotificationContainer>
                    <Notification>3</Notification>
                </NotificationContainer>
            </HeaderContainer>
            <div className="DescriptionContainer">
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, sunt autem reprehenderit culpa quis, sequi rem
                    suscipit aperiam ducimus amet distinctio, enim voluptatum
                    officiis praesentium inventore at quae recusandae quo ad
                    quod repellendus cumque? Ex, voluptatum. Iure incidunt
                    reprehenderit eos dicta placeat inventore maiores accusamus
                    cumque, sunt quae saepe beatae?
                </Description>
            </div>
        </ListContainer>
    );
};
