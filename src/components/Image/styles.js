import styled from 'styled-components';
import { Shadow } from '../../assets/css/shared-styles';
import { borderRadius } from '../../assets/css/theme';

const marginDefault = '0';
const sizeDefault = '50';

export const ImageStyled = styled.img`
    width: ${({ size }) => (size ? `${size}px` : `${sizeDefault}px`)};
    height: ${({ size }) => (size ? `${size}px` : `${sizeDefault}px`)};
    ${({ margin }) => `margin: ${margin || marginDefault};`}
    ${({ radius }) =>
        `border-radius: ${radius || borderRadius};`}
    object-fit: cover;
    object-position: center;
    ${Shadow};
`;
