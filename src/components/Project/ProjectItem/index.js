import React from 'react';
import { Link } from '@reach/router';
import { ListContainer } from '../../ListContainer/index';
import { Image } from '../../Image/index';
import { Avatar } from '../../Avatar';
import { Colors } from '../../../assets/css/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    ProjectContainer,
    Name,
    ButtonContainer,
    Button,
} from './styles';

export const ProjectItem = () => {
    return (
        <ListContainer hover={Colors.hover} cursor="pointer">
            <Container>
                <ProjectContainer>
                    <Image
                        size={28}
                        margin="0 1em 0 0"
                        description="Project Image"
                    />
                    <Name to="/">Fronted</Name>
                </ProjectContainer>
                <div className="MembersContainer">
                    <div className="MembersList" style={{ display: 'flex' }}>
                        {Array(6)
                            .fill()
                            .map((item, index) => (
                                <Avatar margin="0 4px" key={index} size={28} />
                            ))}
                    </div>
                </div>
                <div className="ActionContainer">
                    <ButtonContainer>
                        <Button
                            to="/"
                            bg={Colors.whitePrimary}
                            color={Colors.gray}
                            padding="8px 10px"
                            margin="0 1em 0 0"
                        >
                            <FontAwesomeIcon icon="edit" />
                        </Button>
                        <Button
                            to="/"
                            bg={Colors.whitePrimary}
                            color={Colors.red}
                            padding="8px 10px"
                        >
                            <FontAwesomeIcon icon="trash-alt" />
                        </Button>
                    </ButtonContainer>
                </div>
            </Container>
        </ListContainer>
    );
};
