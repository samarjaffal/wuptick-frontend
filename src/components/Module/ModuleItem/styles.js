import styled from 'styled-components';
import { Link } from '@reach/router';
import { description, info } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';
export const ModuleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled(Link)`
    ${description};
    text-decoration: none;
`;

export const Container = styled.div`
    margin-bottom: 1em;
`;
