import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { ShadowSecondary } from '../../assets/css/shared-styles';

export const Dropdown = styled.div`
    position: absolute;
    top: 46px;
    width: 300px;
    transform: translateX(-45%);
    background-color: ${Colors.white};
    border: 1px solid ${Colors.white};
    border-radius: 8px;
    padding: 14px;
    overflow: hidden;
    ${ShadowSecondary};
    transition: height 500ms ease;
`;
