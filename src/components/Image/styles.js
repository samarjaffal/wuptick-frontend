import styled from 'styled-components';
import { Shadow } from '../../assets/css/shared-styles';
import { borderRadius } from '../../assets/css/theme';

const marginDefault = '0';
const sizeDefault = '50';

export const ImageStyled = styled.img`
      ${({ size }) =>
          `width: ${size || sizeDefault}px; 
        height: ${size || sizeDefault}px;`}
    ${({ margin }) => `margin: ${margin || marginDefault};`}
    ${({ radius }) => `border-radius: ${radius || borderRadius};`}
    /* border-radius: ${borderRadius}; */
    object-fit: cover;
    object-position: center;
    ${Shadow};
`;
