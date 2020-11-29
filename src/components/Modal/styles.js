import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { Shadow, Transition } from '../../assets/css/shared-styles';
import { borderRadius } from '../../assets/css/theme';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1.5px);
`;

export const ModalBox = styled.div`
    position: relative;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 25%;
    width: 35%;
    max-width: 60%;
    background-color: ${Colors.whitePrimary};
    ${Shadow};
    z-index: 101;
    border-radius: ${borderRadius};
    /* overflow-y: auto; */
    padding: 40px;

    @media (max-width: 768px) {
        width: 60%;
        top: 50%;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    border-radius: ${borderRadius};
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${Transition};
    :hover {
        background-color: ${Colors.hover};
    }
`;

export const Title = styled.h2`
    color: ${Colors.black};
`;

export const Container = styled.div`
    @media (max-width: 425px) {
        max-height: 445px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    @media (max-width: 350px) {
        max-height: 400px;
    }
`;
