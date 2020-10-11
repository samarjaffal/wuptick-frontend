import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import {
    subtitle,
    description,
    info,
    bold,
    regular,
} from '../../../assets/css/theme';

export const HeaderContainer = styled.div`
    display: flex;
`;

export const ModuleContainer = styled.div`
    margin-left: auto;
`;

export const Notification = styled.div`
    background: ${Colors.primary};
    color: ${Colors.whitePrimary};
    width: 17px;
    height: 17px;
    border-radius: 50%;
    text-align: center;
    line-height: 1.8;
    font-size: 10px;
    margin-left: 0.6em;
`;

export const Title = styled.span`
    ${subtitle};
    font-weight: ${bold};
`;

export const Description = styled.p`
    ${description};
    font-weight: ${regular};
`;

export const Info = styled.span`
    ${info};
    font-weight: ${bold};
`;
