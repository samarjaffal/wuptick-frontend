import React from 'react';
import { ListContainer } from '../../ListContainer/index';
import { Avatar } from '../../Avatar/index';
import { AddNew } from '../../AddNew/index';
import {
    Container,
    Wrapper,
    Check,
    Title,
    Plus,
    Star,
    Element,
    Deadline,
} from './styles';

export const TaskItem = () => {
    return (
        <>
            <Container>
                <div style={{ width: '50%' }}>
                    <ListContainer>
                        <Wrapper>
                            <Check></Check>
                            <Title to="#">Lorem impsum dolor</Title>
                        </Wrapper>
                    </ListContainer>
                </div>

                <Element>
                    <Avatar size={22} hide={false} />
                </Element>
                <Element>
                    <Star icon="star" />
                </Element>
                <Element>
                    <Deadline>Oct. 6</Deadline>
                </Element>
                <Element dotted={true} displayOnHover={true}>
                    <Plus icon="plus" />
                </Element>
            </Container>
            <Container>
                <div style={{ width: '50%' }}>
                    <ListContainer>
                        <Wrapper>
                            <Check></Check>
                            <Title to="#">
                                Lorem impsum dolor. amet consectetur adipisicing
                                elit.{' '}
                            </Title>
                        </Wrapper>
                    </ListContainer>
                </div>
                <Element>
                    <Avatar size={22} hide={false} />
                </Element>
                <Element>
                    <Star icon="star" />
                </Element>
                <Element dotted={true} displayOnHover={true}>
                    <Plus icon="plus" />
                </Element>
            </Container>
            <Container>
                <div style={{ width: '50%' }}>
                    <ListContainer>
                        <Wrapper>
                            <Check></Check>
                            <Title to="#">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Reiciendis suscipit...
                            </Title>
                        </Wrapper>
                    </ListContainer>
                </div>
                <Element dotted={true} displayOnHover={true}>
                    <Plus icon="plus" />
                </Element>
            </Container>
            <AddNew text="Add new task" />
        </>
    );
};
