import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { info, bold, borderRadius } from '../../assets/css/theme';
import { Transition } from '../../assets/css/shared-styles';

export const Button = styled.small`
    position: absolute;
    right: 0;
    ${info};
    ${({ color }) => color || Colors.primary};
    font-weight: ${bold};
    background: ${Colors.hover};
    padding: 4px ${borderRadius};
    border-radius: ${borderRadius};
    ${Transition}
    :hover {
        background: ${Colors.secondary};
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;
