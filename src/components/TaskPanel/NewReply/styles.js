import styled from 'styled-components';

export const NewReplyContainer = styled.div`
    display: flex;
    align-items: ${({ isFocused }) => (isFocused ? 'start' : 'center')};
    margin-bottom: 20px;
    width: 92%;
    @media (max-width: 425px) {
        width: 100%;
    }
`;
