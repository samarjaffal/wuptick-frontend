import styled from 'styled-components';
import { Colors } from '../../../../assets/css/colors';

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ProjectsContainer = styled.div`
    overflow-y: auto;
    max-height: 280px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: ${Colors.softGray};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${Colors.gray};
    }
`;
