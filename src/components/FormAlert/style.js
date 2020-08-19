import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { semiBold } from '../../assets/css/theme';

export const AlertContainer = styled.div`
    background: ${Colors.whitePrimary};
    height: 25px;
    padding: 10px 10px 10px 20px;
    border: dashed 1.6px #fb7b7f;
    margin-bottom: 20px;
    text-align: left;
`;

export const AlertMessage = styled.span`
    margin: 2px 0 2px 20px;
    font-weight: ${semiBold};
    color: ${Colors.red};
`;
