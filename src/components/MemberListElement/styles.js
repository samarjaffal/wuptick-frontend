import styled from 'styled-components';
import { bold, regular, description } from '../../assets/css/theme';

export const Div = styled.div`
    ${({ customProps }) => customProps};
`;

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

export const MemberName = styled.div`
    ${description};
    font-weight: ${bold};
`;

export const MemberEmail = styled.div`
    ${description};
    font-weight: ${regular};
`;
