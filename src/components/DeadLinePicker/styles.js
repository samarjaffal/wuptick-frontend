import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { info } from '../../assets/css/theme';

export const SetDate = styled.span`
    background-color: ${Colors.white};
    border-radius: 20px;
    ${info};
    padding: 2px 8px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23D6D7E0FF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    cursor: pointer;
`;

export const DeadLineOption = styled.div``;

export const Deadline = styled.div`
    border-radius: 20px;
    ${info};
    color: ${Colors.white};
    background-color: ${Colors.red};
    width: 68px;
    cursor: pointer;
`;

export const ClearDate = styled.div`
    position: absolute;
    right: -8px;
    top: -16px;
    cursor: pointer;
`;

export const ClearIcon = styled(FontAwesomeIcon)`
    font-size: 9px;
    color: ${Colors.gray};
    visibility: hidden;
    ${DeadLineOption}:hover & {
        visibility: visible;
    }
`;
