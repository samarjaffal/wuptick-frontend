import styled from 'styled-components';
import { subtitle, bold, info } from '../../../../assets/css/theme';

export const Subtitle = styled.h4`
    ${subtitle};
    font-weight: ${bold};
`;

export const Empty = styled.span`
    ${info}
`;

export const MembersContainer = styled.div`
    max-height: 360px;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    @media (max-width: 768px) {
        text-align: center;
    }
`;
