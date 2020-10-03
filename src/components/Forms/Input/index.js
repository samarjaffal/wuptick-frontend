import React from 'react';
import { Input as InputStyled } from './styles';
export const Input = ({ refInput, ...rest }) => {
    return <InputStyled {...rest} ref={refInput} />;
};
