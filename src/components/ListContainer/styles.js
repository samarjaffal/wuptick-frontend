import styled from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { Transition, Shadow } from '../../assets/css/shared-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bold, subtitle, info, borderRadius } from '../../assets/css/theme';
export const Container = styled.div`
    background-color: ${Colors.white};
    padding: 1em;
    border-radius: ${borderRadius};
    font-size: 14px;
    margin-bottom: ${({ margin }) => margin || '1em'};
    ${({ shadow }) => (shadow == true ? Shadow : '')};
    cursor: ${({ cursor }) => cursor};
    :hover {
        background-color: ${({ hover }) => hover || Colors.white};
    }
    ${Transition};
    opacity: 1;
`;

export const TitleContainer = styled.div`
    display: flex;
    font-size: 16px;
    align-items: end;
    padding: 0 10px;
    position: relative;
`;

export const AddButton = styled.small`
    position: absolute;
    right: 0;
    ${info};
    color: ${Colors.primary};
    font-weight: ${bold};
    background: ${Colors.hover};
    padding: 4px ${borderRadius};
    border-radius: ${borderRadius};
    ${Transition}
    :hover {
        background: ${Colors.secondary};
    }
`;

export const Title = styled.h4`
    margin: 0;
    margin-bottom: 1em;
    ${subtitle};
    font-weight: ${bold};
`;

export const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;
