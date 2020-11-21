import styled from 'styled-components';
import { Colors } from '../../../../assets/css/colors';
import { Shadow, Transition } from '../../../../assets/css/shared-styles';
import {
    borderRadius,
    info,
    description,
    bold,
} from '../../../../assets/css/theme';

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Label = styled.div`
    ${description};
    font-weight: ${bold};
    color: ${Colors.gray};
`;
