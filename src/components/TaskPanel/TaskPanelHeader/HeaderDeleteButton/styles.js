import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../../assets/css/colors';

export const Icon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${({ color }) => (color ? color : Colors.gray)};
`;
