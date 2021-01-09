import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { title, regular, info, description } from '../../../assets/css/theme';
import { Colors } from '../../../assets/css/colors';

export const TaskContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const TaskDetails = styled.div`
    margin-left: 15px;
`;

export const TaskName = styled.div`
    ${title};
    font-size: 16px;
`;

export const TaskDescription = styled.p`
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
