import styled from 'styled-components';
import {
    subtitle,
    bold,
    regular,
    description,
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
