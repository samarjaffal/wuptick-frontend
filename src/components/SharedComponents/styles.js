import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { info, borderRadius } from '../../assets/css/theme';
import {
    ShadowSecondary,
    Shadow,
    TransitionSecondary,
} from '../../assets/css/shared-styles';

export const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ customProps }) => customProps};
`;

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    ${({ customProps }) => customProps};
`;

export const Div = styled.div`
    ${({ customProps }) => customProps};
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${({ customProps }) => customProps};
`;

export const ErrorMessage = styled.p`
    color: ${Colors.red};
    margin: 0 0 10px 5px;
    text-align: left;
    font-size: 12.5px;
    :before {
        display: inline;
        content: '⚠ ';
    }
`;

export const Button = styled.button`
    border: none;
    background: ${({ bg }) => (bg ? bg : Colors.primary)};
    padding: 10px 30px;
    border-radius: ${borderRadius};
    text-decoration: none;
    ${info};
    font-weight: 400;
    color: ${({ color }) => (color ? color : Colors.white)};
    width: ${({ width }) => (width ? width : 'auto')};
    margin: ${({ margin }) => (margin ? margin : 'auto')};
    cursor: pointer;
    :hover {
        ${Shadow};
        ${TransitionSecondary};
        opacity: 0.8;
    }
    opacity: ${({ disabled }) => (disabled == true ? 0.6 : 1)};
    @media (max-width: 768px) {
        margin: auto;
        width: 60%;
        text-align: center;
    }
`;
