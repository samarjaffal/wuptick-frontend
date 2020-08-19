import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { bold } from '../../assets/css/theme';

export const Span = styled.span`
    font-size: 14px;
    font-weight: ${bold};
    color: ${Colors.gray};
    position: absolute;
    width: 100%;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: -60px;
`;
