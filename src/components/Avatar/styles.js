import styled from 'styled-components';

const marginDefault = '0';
const sizeDefault = '25';
export const Avatar = styled.img`
    ${({ size }) =>
        `width: ${size || sizeDefault}px; 
        height: ${size || sizeDefault}px;`}
    ${({ margin }) =>
        `margin: ${margin || marginDefault};`}
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    @media (max-width: 767px) {
        display: ${({ hide }) => (hide == true ? 'none' : 'block')};
    }
`;
