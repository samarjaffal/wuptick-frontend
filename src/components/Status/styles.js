import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { info } from '../../assets/css/theme';

export const Status = styled.div`
    font-size: 10px;
    padding: 0px 15px;
    color: ${Colors.white};
    background: ${({ background }) =>
        background ? background : Colors.primary};
    border-radius: 20px;
    line-height: 2;
`;
