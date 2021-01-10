import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { Shadow } from '../../assets/css/shared-styles';
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
    position: absolute;
    bottom: 0;
    right: 0;
    min-height: 15%;
    height: 85%;
    width: 45%;
    background-color: ${Colors.whitePrimary};
    ${Shadow};
    z-index: 101;
    border-radius: ${borderRadius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding: 40px;

    @media (max-width: 768px) {
        width: 60%;
    }
`;

export const Container = styled.div`
    margin-top: 60px;
    @media (max-width: 425px) {
        max-height: 445px;
    }
    @media (max-width: 350px) {
        max-height: 400px;
    }
`;

export const Header = styled.div`
    position: absolute;
    width: 100%;
    border-top-left-radius: ${borderRadius};
    border-top-left-radius: ${borderRadius};
    background-color: ${Colors.white};
    padding: 10px;
    height: 45px;
    top: 0;
    left: 0;
`;
