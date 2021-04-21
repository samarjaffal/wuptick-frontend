import styled from 'styled-components';
import { Colors } from '../../../assets/css/colors';
import { description } from '../../../assets/css/theme';

export const AvatarContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        order: 1;
        margin-bottom: 1em;
        width: 100%;
    }
`;

export const Anchor = styled.span`
    ${description};
    color: ${({ color }) => (color ? Colors[color] : Colors.primary)};
    margin-top: 0.5em;
    cursor: pointer;
    text-decoration: underline;
`;
