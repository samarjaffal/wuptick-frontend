import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { info, bold, borderRadius } from '../../assets/css/theme';
import { TransitionSecondary } from '../../assets/css/shared-styles';

export const Anchor = styled(Link)`
    text-decoration: none;
    margin: ${({ margin }) => margin || 'auto'};
`;

export const Button = styled.small`
    ${info};
    ${({ color }) => color || Colors.primary};
    font-weight: ${bold};
    padding: 4px ${borderRadius};
    height: min-content;
    border-radius: ${borderRadius};
    cursor: pointer;
    ${TransitionSecondary}
    :hover {
        background: ${Colors.hover};
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;
