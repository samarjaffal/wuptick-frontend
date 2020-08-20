import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { Shadow } from '../../assets/css/shared-styles';
import { subtitle, borderRadius, info, bold } from '../../assets/css/theme';

const marginDefault = '0';
const sizeDefault = '50';

export const Container = styled.div`
    display: flex;
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
