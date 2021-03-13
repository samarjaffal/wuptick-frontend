import styled from 'styled-components';

export const Container = styled.div`
    /* padding-top: 60px; */
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '90px')};
    margin-right: 75px;
    @media (max-width: 767px) {
        margin: 0 20px;
    }
`;
