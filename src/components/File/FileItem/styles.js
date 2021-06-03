import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { Transition } from '../../../assets/css/shared-styles';
import {
    borderRadius,
    description,
    bold,
    info,
} from '../../../assets/css/theme';

const FILE_WIDTH = '100%';

export const Container = styled.div`
    width: ${FILE_WIDTH};
    max-width: ${FILE_WIDTH};
    background: ${Colors.white};
    padding: 0.8em;
    border-radius: ${borderRadius};
    position: relative;
    box-sizing: border-box;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.8em;
`;

export const AvatarContainer = styled.div`
    position: absolute;
    right: 45px;
`;
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: ${({ wrap }) => (wrap == true ? 'wrap' : 'none')};
`;
export const DetailsContainer = styled.div``;

export const FileName = styled.span`
    ${description};
    font-weight: ${bold};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 220px;
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
    height: 145px;
    object-fit: cover;
    object-position: center center;
`;

export const FileContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    margin-top: 0.5em;
    width: 100%;
    height: 145px;
    background-color: ${Colors.whitePrimary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid ${Colors.softGray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FileLink = styled(Link)`
    ${description};
    font-weight: ${bold};
    font-size: 12px;
    text-decoration: none;
    ${Transition};
    :hover {
        text-decoration: underline;
        color: ${Colors.primary};
    }
`;

export const FileIcon = styled(FontAwesomeIcon)`
    color: ${Colors.primary};
    font-size: 40px;
`;
