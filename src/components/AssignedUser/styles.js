import styled from 'styled-components';
import { TransitionSecondary } from '../../assets/css/shared-styles';
import { Colors } from '../../assets/css/colors';
import UserIcon from '../../assets/images/user.svg';

export const UserIconContainer = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%23D6D7E0FF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    text-align: center;
    line-height: 1.8;
    cursor: pointer;
    :hover {
        ${TransitionSecondary};
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%23A7A8AF' stroke-width='1.5' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
`;

export const UserIconSVG = styled(UserIcon)`
    fill: ${Colors.softGray};
    ${UserIconContainer}:hover & {
        fill: ${Colors.gray};
        ${TransitionSecondary};
    }
`;
