import styled from 'styled-components';

export const Container = styled.div`
    /* padding-top: 60px; */
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '300px')};
    margin-right: 75px;
    width: 85%;
    padding-top: 15px;
    @media (max-width: 767px) {
        margin: 0 20px;
    }
`;
