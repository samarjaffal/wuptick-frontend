import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Li = styled.li`
    width: 32%;
    margin: 6px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
