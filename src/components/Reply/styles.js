import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import {
    description,
    regular,
    info,
    borderRadius,
} from '../../assets/css/theme';

export const Description = styled.p`
    ${description};
    font-weight: ${regular};
    margin-bottom: 0;
`;

export const CreatedDate = styled.span`
    ${info}
`;

export const MemberName = styled.span`
    background: ${Colors.secondary};
    padding: 0px 6px;
    ${info};
    border-radius: ${borderRadius};
    color: ${Colors.white};
`;
