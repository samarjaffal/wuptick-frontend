import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { description } from '../../../assets/css/theme';

export const HeaderTaskOptions = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    justify-content: space-between;
`;

export const ClosePanelIcon = styled(FontAwesomeIcon)`
    font-size: 22px;
    color: ${Colors.gray};
    cursor: pointer;
`;

export const CollaboratorsTitle = styled.span`
    ${description};
    color: ${Colors.gray};
    margin-right: 0.5em;
`;
