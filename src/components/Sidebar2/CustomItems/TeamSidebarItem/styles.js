import styled from 'styled-components';

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: ${({ show }) => (show ? show : 'none')};
`;