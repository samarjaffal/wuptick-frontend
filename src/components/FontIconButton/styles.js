import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { Transition } from '../../assets/css/shared-styles';

export const ButtonContainer = styled.div`
    cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 12px;
    color: ${Colors.gray};
    ${Transition};
    ${ButtonContainer}:hover & {
        color: ${Colors.primary};
    }
`;
