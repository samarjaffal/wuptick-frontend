import styled from 'styled-components';
import { Colors } from '../../../../assets/css/colors';
import { Shadow, Transition } from '../../../../assets/css/shared-styles';
import {
    borderRadius,
    info,
    description,
    bold,
} from '../../../../assets/css/theme';

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

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const SaveButton = styled.button`
    border: none;
    background: ${Colors.primary};
    padding: 10px 30px;
    border-radius: ${borderRadius};
    text-decoration: none;
    ${info};
    color: ${Colors.white};
    width: ${({ width }) => (width ? width : 'auto')};
    cursor: pointer;
    :hover {
        ${Shadow};
        ${Transition};
    }
    opacity: ${({ disabled }) => (disabled == true ? 0.6 : 1)};
    @media (max-width: 768px) {
        margin: auto;
        width: 60%;
        text-align: center;
    }
`;

export const Label = styled.div`
    ${description};
    font-weight: ${bold};
    color: ${Colors.gray};
`;
