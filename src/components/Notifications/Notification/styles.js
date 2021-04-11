import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { info } from '../../../assets/css/theme';

export const Notification = styled.div`
    border: 1px solid #dddee5;
    border-left: none;
    margin-bottom: -1px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: ${Colors.whitePrimary};
    border-right: none;
    position: relative;
`;

export const Date = styled.span`
    ${info}
`;
