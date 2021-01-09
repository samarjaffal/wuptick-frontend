import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { borderRadius, description } from '../../../assets/css/theme';

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

export const BoxOption = styled.div`
    border-radius: ${borderRadius};
    background-color: ${Colors.whitePrimary};
    width: 35px;
    height: 35px;
    margin: 0 8px;
    cursor: pointer;
`;

export const BoxOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const URLTaskIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${Colors.softGray};
`;

export const ArchiveIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${Colors.softGray};
`;

export const LeaveIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${Colors.softGray};
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${Colors.softGray};
`;

export const CollaboratorsTitle = styled.span`
    ${description};
    color: ${Colors.gray};
    margin-right: 0.5em;
`;
