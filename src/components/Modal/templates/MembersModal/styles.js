import styled from 'styled-components';
import { Colors } from '../../../../assets/css/colors';
import { subtitle, bold, info } from '../../../../assets/css/theme';

export const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ customProps }) => customProps};
`;

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    ${({ customProps }) => customProps};
`;

export const Div = styled.div`
    ${({ customProps }) => customProps};
`;

export const Subtitle = styled.h4`
    ${subtitle};
    font-weight: ${bold};
`;

export const Empty = styled.span`
    ${info}
`;
export const Hr = styled.hr`
    border: solid 1px ${Colors.hover};
    opacity: 0.6;
`;

export const SmallMessage = styled.small`
    ${info};
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0 10px;
`;
