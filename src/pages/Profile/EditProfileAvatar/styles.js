import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../../assets/css/colors';
import { description, bold } from '../../../assets/css/theme';

export const AvatarContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        order: 1;
        margin-bottom: 1em;
        width: 100%;
    }
`;

export const Anchor = styled.span`
    ${description};
    color: ${({ color }) => (color ? Colors[color] : Colors.primary)};
    margin-top: 0.5em;
    cursor: pointer;
    text-decoration: underline;
`;

export const AvatarWrapper = styled.div`
    position: relative;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 15px -5px black;
    transition: all 0.3s ease;

    :hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const ProfilePic = styled.img`
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;

    ${AvatarWrapper}:hover & {
        opacity: 0.5;
    }

    :after {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 190px;
        background: #ecf0f1;
        color: #34495e;
        text-align: center;
    }
`;

export const UploadButton = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

export const UploadIcon = styled(FontAwesomeIcon)`
    position: absolute;
    font-size: 149px;
    top: -17px;
    left: -15px;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease;
    color: ${Colors.white};

    ${UploadButton}:hover & {
        opacity: 0.3;
    }
`;

export const SaveAvatarContainer = styled.div`
    text-align: center;
    padding: 5px 20px;
`;

export const SaveAvatarButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: ${Colors.primary};
    font-weight: ${bold};
    cursor: pointer;
`;

export const SaveAvatarSpan = styled.span`
    font-size: 12px;
    color: ${Colors.black};
    font-weight: ${bold};
`;

export const CancelAvatarButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: ${Colors.red};
    font-weight: ${bold};
    cursor: pointer;
`;
