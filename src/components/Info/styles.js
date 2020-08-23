import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Shadow } from '../../assets/css/shared-styles';
import { subtitle, borderRadius, info, bold } from '../../assets/css/theme';

const marginDefault = '0';
const sizeDefault = '50';

export const Container = styled.div`
    display: flex;
    margin: 0.5em 0;
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
    ${subtitle};
    font-weight: ${bold};
    font-size: 14px;
`;

export const Details = styled.h6`
    margin: 0;
    ${info};
    font-weight: ${bold};
`;

export const Clock = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;
