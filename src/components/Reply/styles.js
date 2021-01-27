import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import {
    description,
    regular,
    info,
    borderRadius,
} from '../../assets/css/theme';

export const ReplyContainer = styled.div`
    margin-bottom: 1em;
    background-color: #f9faff;
    padding-bottom: 1em;
    border: 1px solid ${Colors.hover};
    border-radius: ${borderRadius};
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${Colors.whitePrimary};
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
    border-bottom: 1px solid ${Colors.hover};
    box-sizing: border-box;
    padding-top: 5px;
    padding-left: 1em;
`;

export const Description = styled.div`
    ${description};
    font-weight: ${regular};
    margin-bottom: 0;
    margin-top: 0.5em;
`;

export const CreatedDate = styled.span`
    ${info};
    margin-right: 10px;
`;

export const MemberName = styled.span`
    ${info};
    color: ${Colors.black};
    margin-left: 0.5em;
`;
