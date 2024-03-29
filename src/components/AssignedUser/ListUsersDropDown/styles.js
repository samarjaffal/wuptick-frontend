import styled from 'styled-components';
import { borderRadius, bold, description } from '../../../assets/css/theme';
import { TransitionSecondary } from '../../../assets/css/shared-styles';
import { Colors } from '../../../assets/css/colors';

export const InputSearch = styled.input`
    background-color: ${Colors.backgroud};
    height: 30px;
    box-sizing: border-box;
    border: none;
    padding: 10px;
    color: ${Colors.black};
    font-weight: ${bold};
    border-radius: ${borderRadius};
    width: 100%;
    :focus {
        outline: none;
        border: 1px solid ${Colors.primary};
        border-radius: ${borderRadius};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
    :-ms-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
`;

export const MembersContainer = styled.div`
    max-height: 130px;
    overflow-y: auto;
`;

export const MemberItem = styled.li`
    cursor: pointer;
    padding: 0 0.5em;
    min-height: 40px;
    border-radius: ${borderRadius};
    :hover {
        ${TransitionSecondary};
        background-color: ${Colors.hover};
    }
`;

export const NotAssigned = styled.li`
    cursor: pointer;
    padding: 0 0.5em;
    border-radius: ${borderRadius};
    margin-bottom: 0.5em;
`;

export const Span = styled.span`
    ${description};
    font-weight: ${bold};
    color: ${Colors.gray};
    ${NotAssigned}:hover & {
        ${TransitionSecondary};
        color: ${Colors.red};
    }
`;
