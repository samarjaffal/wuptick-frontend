import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import {
    borderRadius,
    description,
    bold,
    info,
} from '../../../assets/css/theme';

const FILE_WIDTH = '280px';

export const Container = styled.div`
    width: ${FILE_WIDTH};
    max-width: ${FILE_WIDTH};
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
export const DetailsContainer = styled.div``;

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

export const FileImg = styled.img`
    width: 100%;
    border-radius: 8px;
    margin-top: 0.5em;
    width: 280px;
    height: 145px;
    object-fit: cover;
    object-position: center center;
`;

export const FileLink = styled.div`
    ${description};
    font-weight: ${bold};
    font-size: 12px;
`;
