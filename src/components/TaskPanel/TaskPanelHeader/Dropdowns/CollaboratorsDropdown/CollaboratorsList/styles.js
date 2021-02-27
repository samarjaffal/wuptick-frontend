import styled from 'styled-components';
import { Colors } from '../../../../../../assets/css/colors';
import { borderRadius } from '../../../../../../assets/css/theme';
import { TransitionSecondary } from '../../../../../../assets/css/shared-styles';

export const MembersContainer = styled.div`
    max-height: 130px;
    overflow-y: auto;
`;

export const MemberItem = styled.li`
    cursor: pointer;
    padding: 0 0.5em;
    min-height: 40px;
    border-radius: ${borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover {
        ${TransitionSecondary};
        background-color: ${Colors.hover};
    }
`;

export const RemoveButton = styled.div`
    font-size: 12px;
    display: none;
    ${MemberItem}:hover & {
        display: block;
        color: ${Colors.red};
    }
`;

export const AddButton = styled.div`
    font-size: 12px;
    display: none;
    ${MemberItem}:hover & {
        display: block;
        color: ${Colors.primary};
    }
`;
