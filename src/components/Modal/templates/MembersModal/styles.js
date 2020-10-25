import styled from 'styled-components';
import { Colors } from '../../../../assets/css/colors';
import {
    subtitle,
    bold,
    regular,
    description,
    info,
} from '../../../../assets/css/theme';

export const Subtitle = styled.h4`
    ${subtitle};
    font-weight: ${bold};
`;

export const MemberName = styled.div`
    ${description};
    font-weight: ${bold};
`;

export const MemberEmail = styled.div`
    ${description};
    font-weight: ${regular};
`;

export const Empty = styled.span`
    ${info}
`;
export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
    opacity: 0.6;
`;
