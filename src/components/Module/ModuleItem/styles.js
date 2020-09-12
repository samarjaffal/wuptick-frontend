import styled from 'styled-components';
import { Link } from '@reach/router';
import { description, borderRadius, info } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';
export const ModuleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled(Link)`
    ${description};
    text-decoration: none;
`;

export const Status = styled.span`
    ${info};
    font-size: 10px;
    padding: 0px 15px;
    color: ${Colors.white};
    background: ${Colors.primary};
    border-radius: ${borderRadius};
    line-height: 2;
`;
