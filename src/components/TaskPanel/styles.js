import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 500px;
    padding: 0 40px;
    padding-top: 60px;
    height: 100%;

    @media (max-width: 425px) {
        max-height: 580px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;
