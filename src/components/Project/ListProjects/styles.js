import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { subtitle, bold } from '../../../assets/css/theme';

export const DropDownContainer = styled.div`
    display: flex;
    margin-top: 1.5em;
    margin-bottom: 1em;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

export const Title = styled.h4`
    ${subtitle};
    font-weight: ${bold};
    margin: 0;
`;

export const Collapsed = styled.div`
    display: ${({ open }) => (open == true ? 'block' : 'none')};
`;
