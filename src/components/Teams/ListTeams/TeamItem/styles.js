import styled from 'styled-components';
import { Link } from '@reach/router';
import { description } from '../../../../assets/css/theme';
import { Colors } from '../../../../assets/css/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 424px) {
        flex-wrap: wrap;
    }
    position: relative;
`;

export const TeamContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const MembersContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    @media (max-width: 424px) {
        justify-content: flex-start;
        width: 100%;
        margin-top: 0.5em;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
`;

export const ButtonContainer = styled.div``;

export const Name = styled(Link)`
    ${description};
    text-decoration: none;
`;

export const OptionsButton = styled.div`
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 28px;
    border-radius: 8px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    ${Container}:hover & {
        opacity: 1;
    }
    :hover {
        opacity: 1;
        background-color: ${Colors.white};
    }

    @media (max-width: 424px) {
        position: absolute;
        right: 0;
        top: 0;
    }
`;
