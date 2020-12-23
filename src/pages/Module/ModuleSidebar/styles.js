import styled from 'styled-components';
import { Link } from '@reach/router';
import { Colors } from '../../../assets/css/colors';
import { TransitionSecondary } from '../../../assets/css/shared-styles';
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
    color: ${Colors.black};
`;

export const TitleSection = styled.div`
    ${subtitle};
    font-weight: ${bold};
    color: ${Colors.black};
`;

export const ModuleTitle = styled(Link)`
    ${description};
    font-weight: ${regular};
    color: ${Colors.black};
    cursor: pointer;
    text-decoration: none;
    ${TransitionSecondary};
    :hover {
        color: ${Colors.primary};
    }
`;

export const ModulesList = styled.ul`
    list-style: none;
    padding: 0 15px;
    margin: 0;
    margin-top: 10px;
    line-height: 2;
`;
