import styled from 'styled-components';
import TagIcon from '../../../../assets/images/task-icons/tag-icon.svg';
import { Colors } from '../../../../assets/css/colors';

export const TagIconSVG = styled(TagIcon)`
    fill: ${({ color }) => (color ? color : Colors.softGray)};
`;
