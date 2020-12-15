import styled from 'styled-components';
import { description, info } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';

export const Task = styled.div`
    border: 1px solid #dddee5;
    border-left: none;
    margin-bottom: -1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

export const TaskText = styled.p`
    color: ${Colors.black};
    ${description};
    font-weight: 400;
    margin: 0;
    margin-left: 10px;
`;

export const TaskOptions = styled.div`
    display: flex;
`;

export const OptionContainer = styled.div`
    padding: 0 1em;
    border-left: 1px solid #dddee5;
    border-right: 1px solid #dddee5;
    margin-right: -1px;
    display: flex;
    align-items: center;
    height: 40px;
    width: 65px;
`;
export const AsigneeOption = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const SetDate = styled.span`
    background-color: ${Colors.white};
    border-radius: 20px;
    ${info};
    padding: 2px 8px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23D6D7E0FF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;

export const CenterContent = styled.div`
    width: 100%;
    text-align: center;
`;
