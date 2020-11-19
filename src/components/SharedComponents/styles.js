import styled from 'styled-components';

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

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${({ customProps }) => customProps};
`;
