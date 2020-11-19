import React from 'react';
import { Input as InputStyled } from './styles';
export const TextArea = ({ refEl, ...rest }) => {
    return <InputStyled {...rest} ref={refEl} />;
};
