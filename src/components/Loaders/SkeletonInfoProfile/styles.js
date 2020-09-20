import styled from 'styled-components';

export const ProfileInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        margin-bottom: 1em;
    }
`;

export const ProfileInfo = styled.div`
    margin-left: 1.5em;
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 767px) {
        margin-left: 0;
        width: 100%;
    }
`;
