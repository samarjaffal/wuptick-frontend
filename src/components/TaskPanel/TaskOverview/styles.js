import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '../../../assets/css/shared-styles';
import { title, regular, info, description } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';

export const TaskContainer = styled.div`
    display: flex;
`;

export const TaskDetails = styled.div`
    margin-left: 15px;
    width: 100%;
`;

export const TaskName = styled.div`
    ${title};
    font-size: 16px;
    margin-right: 0.5em;
`;

export const TaskDescription = styled.div`
    ${description};
    font-weight: ${regular};
    margin-bottom: 0.5em;
`;

export const TaskOwner = styled(Link)`
    ${info};
    color: ${Colors.primary};
    text-decoration: none;
`;

export const TaskCreatedDate = styled.span`
    ${info}
`;

export const Dot = styled(FontAwesomeIcon)`
    font-size: 3px;
    margin: 0 6px;
    color: ${Colors.gray};
`;

export const TaskInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const CancelSpan = styled.span`
    ${info};
    cursor: pointer;
    :hover {
        color: ${Colors.primary};
        ${Transition};
    }
`;
export const NoTaskDescription = styled.p`
    ${info};
    font-size: 14px;
    margin-bottom: 0.5em;
`;
