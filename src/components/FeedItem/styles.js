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
    margin: 0 1em;
`;

export const ActivityInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const UserInfo = styled.div``;

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
`;

export const Text = styled.div`
    ${info};
    font-weight: ${bold};
`;

export const User = styled.span`
    ${description};
`;

export const Action = styled.span`
    ${description};
    color: ${Colors.gray};
`;

export const Item = styled.span`
    ${description};
    color: ${Colors.primary};
`;
export const Time = styled.span`
    ${info};
    margin-right: 1em;
`;
