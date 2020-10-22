import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import {
    borderRadius,
    description,
    bold,
    info,
} from '../../../assets/css/theme';

export const Container = styled.div`
    width: 350px;
    max-width: 350px;
    background: ${Colors.white};
    padding: 0.8em;
    border-radius: ${borderRadius};
    position: relative;
    margin-right: 1em;
    margin-bottom: 1em;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.8em;
`;

export const AvatarContainer = styled.div`
    position: absolute;
    right: 0.5em;
`;
export const Flex = styled.div`
    display: flex;
    flex-wrap: ${({ wrap }) => (wrap == true ? 'wrap' : 'none')};
`;
export const DetailsContainer = styled.div`
    text-align: right;
    width: 50%;
    margin-left: auto;
    margin-top: -20px;
`;

export const FileName = styled.span`
    ${description};
    font-weight: ${bold};
`;

export const Origin = styled.span`
    ${description};
    font-weight: ${bold};
    color: ${Colors.gray};
`;

export const Date = styled.span`
    ${info};
    font-weight: ${bold};
`;

export const Size = styled.span`
    ${info};
    font-weight: ${bold};
`;