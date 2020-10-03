import styled from 'styled-components';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Shadow, Transition } from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';
import { description, borderRadius, info, bold } from '../../assets/css/theme';

const marginDefault = '0';
const sizeDefault = '50';

export const Container = styled.div`
    display: flex;
    padding: 10px;
    border-radius: ${borderRadius};
    cursor: pointer;
    ${Transition};
    :hover {
        background: ${Colors.hover};
    }
`;

export const Image = styled.img`
      ${({ size }) =>
          `width: ${size || sizeDefault}px; 
        height: ${size || sizeDefault}px;`}
    ${({ margin }) => `margin: ${margin || marginDefault};`}
    border-radius: ${borderRadius};
    object-fit: cover;
    object-position: center;
    ${Shadow};
`;

export const DetailsContainer = styled.div`
    margin-left: 1em;
`;

export const Title = styled.h5`
    margin: 0;
    ${description};
    ${Transition};
    ${Container}:hover & {
        color: ${Colors.primary};
    }
`;

export const Details = styled.h6`
    margin: 0;
    ${info};
    font-weight: ${bold};
`;

export const OwnerAnchor = styled(Link)`
    margin: 0;
    ${info};
    font-weight: ${bold};
    text-decoration: none;
`;

export const Clock = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;
