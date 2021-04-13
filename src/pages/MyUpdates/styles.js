import styled from 'styled-components';
import { title, description } from '../../assets/css/theme';

export const Title = styled.h1`
    ${title};
    margin: 0;
`;

export const NotificationsContainer = styled.div`
    margin-top: 1em;
`;

export const NoNotificationsMessage = styled.div`
    ${description};
`;
