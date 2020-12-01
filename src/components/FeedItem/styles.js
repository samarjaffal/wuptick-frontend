import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../assets/css/colors';
import {
    bold,
    semiBold,
    borderRadius,
    info,
    description,
} from '../../assets/css/theme';
import { ShadowSecondary, Transition } from '../../assets/css/shared-styles';

export const Container = styled.div`
    display: flex;
`;

export const ImageContainer = styled.div``;

export const ActitivityContainer = styled.div`
    margin-left: 1em;
    width: 100%;
    @media (max-width: 767px) {
        margin-left: 0;
    }
`;

export const ActivityInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const UserInfo = styled.div`
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const TimeInfo = styled.div``;

export const AnchorProject = styled(Link)`
    text-decoration: none;
    font-size: 1em;
    font-weight: ${semiBold};
    color: ${Colors.white};
    padding: 0px 15px;
    background: ${Colors.primary};
    border-radius: ${borderRadius};
    ${ShadowSecondary}
    ${Transition}
    :hover {
        background: ${Colors.secondary};
    }
`;

export const Divider = styled.div`
    width: 100%;
    border: em solid;
    height: 1px;
    background: #d6d7e0;
    margin: 0.5em 0;
    opacity: 0.3;
`;

export const Text = styled.div`
    ${info};
    font-weight: ${bold};
    margin-top: 0.5em;
`;

export const User = styled(Link)`
    ${description};
    text-decoration: none;
    ${Transition};
    :hover {
        color: ${Colors.primary};
    }
`;

export const Action = styled.span`
    ${description};
    color: ${Colors.gray};
`;

export const Item = styled(Link)`
    ${description};
    text-decoration: none;
    ${Transition};
    color: ${Colors.primary};
`;
export const Time = styled.span`
    ${info};
    margin-right: 1em;
`;

export const Title = styled(Link)`
    ${description};
    text-decoration: none;
    ${Transition};
    :hover {
        color: ${Colors.primary};
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CommentInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const CommentContainer = styled.div`
    padding: 1em;
    margin: 0.5em 0.5em 0 0.5em;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23D6D7E0FF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
`;

export const CommentText = styled.div`
    ${info};
    font-weight: ${bold};
    color: ${Colors.black};
`;
