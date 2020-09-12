import { useContext, useCallback } from 'react';
import Context from '../context/UserContext';
import { setAccessToken as setToken } from '../shared/GetAccessToken';
import jwtDecode from 'jwt-decode';

export const useUser = () => {
    const {
        accessToken,
        setAccessToken,
        teamSelected,
        setTeamSelected,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
    } = useContext(Context);

    const activateAuth = useCallback(
        (token) => {
            setAccessToken(token);
            setToken(token);
            setUserInfo(token);
        },
        [setAccessToken]
    );

    const setUserInfo = useCallback(async (token) => {
        let decodedToken = await jwtDecode(token);
        setCurrentUser({
            _id: decodedToken._id,
            name: decodedToken.name,
            last_name: decodedToken.last_name,
        });
    });

    const disableAuth = useCallback(() => {
        setAccessToken('');
        setToken('');
    }, []);

    const nameUrl = `${currentUser.name}-${currentUser.last_name}`;
    const profileURL = `profile/${nameUrl}-${currentUser._id}`;

    return {
        isLogged: Boolean(accessToken),
        activateAuth,
        disableAuth,
        teamSelected,
        setTeamSelected,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        profileURL,
    };
};
