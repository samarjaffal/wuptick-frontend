import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';

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
    /*  opacity: 0; */
    opacity: 1;
    background-color: ${Colors.white};
    @media (max-width: 424px) {
        position: absolute;
        right: 0;
        top: 0;
    }
`;
