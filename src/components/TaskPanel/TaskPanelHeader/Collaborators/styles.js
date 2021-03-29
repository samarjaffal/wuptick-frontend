import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../../assets/css/colors';

export const Plus = styled(FontAwesomeIcon)`
    font-size: 10px;
    color: ${Colors.gray};
`;

export const CollaboratorsListContainer = styled.div`
    display: flex;
    align-items: center;
`;
