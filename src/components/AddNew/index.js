import React from 'react';
import { Colors } from '../../assets/css/colors';
import { Container, Text, Icon } from './styles';
export const AddNew = ({ text, icon = true }) => {
    return (
        <Container>
            <div>
                {icon && <Icon icon="plus" color={Colors.gray} fontSize={10} />}{' '}
                {'  '} <Text>{text}</Text>
            </div>
        </Container>
    );
};
