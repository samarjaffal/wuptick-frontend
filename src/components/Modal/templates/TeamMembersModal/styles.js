import styled from 'styled-components';
import { subtitle, bold, info } from '../../../../assets/css/theme';

export const Subtitle = styled.h4`
    ${subtitle};
    font-weight: ${bold};
`;

export const Empty = styled.span`
    ${info}
`;
