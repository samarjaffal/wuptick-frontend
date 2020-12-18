import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import {
    subtitle,
    bold,
    description,
    regular,
} from '../../../assets/css/theme';

export const ProjectTitle = styled.span`
    ${subtitle};
    font-size: 18px;
    font-weight: ${bold};
    margin: 0 0.5em;
    color: ${Colors.white};
`;

export const TitleSection = styled.div`
    ${subtitle};
    font-weight: ${bold};
    color: ${Colors.white};
`;

export const ModuleTitle = styled.div`
    ${description};
    font-weight: ${regular};
    color: ${Colors.white};
`;

export const ModulesList = styled.ul`
    list-style: none;
    padding: 0 15px;
    margin: 0;
    margin-top: 10px;
    line-height: 2;
`;
