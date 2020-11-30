import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { bold } from '../../assets/css/theme';

export const Label = styled.div`
    font-size: 13px;
    padding: 0px 15px;
    font-weight: ${bold};
    color: ${({ color }) => (color ? color : Colors.black)};
    background: ${Colors.white};
    border-radius: 20px;
    border: 1px solid ${({ color }) => (color ? color : Colors.black)};
    line-height: 2;
    width: ${({ width }) => (width ? width : '60px')};
    min-width: 60px;
    text-align: center;
    cursor: ${({ pointer }) => (pointer == true ? 'pointer' : 'default')};
    @media (max-width: 425px) {
        width: ${({ fullWidth, width }) => (fullWidth ? fullWidth : width)};
    }
`;
