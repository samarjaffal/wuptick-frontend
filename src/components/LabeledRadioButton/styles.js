import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { bold, description } from '../../assets/css/theme';

export const Name = styled.div`
    margin-right: 1em;
    ${description};
    font-weight: ${bold};
    color: ${Colors.gray};
`;
