import { useContext, useCallback } from 'react';
import Context from '../context/UserContext';
import { setAccessToken as setToken } from '../shared/GetAccessToken';

export const useUser = () => {
    const {
        accessToken,
        setAccessToken,
        teamSelected,
        setTeamSelected,
    } = useContext(Context);

    const activateAuth = useCallback(
        (token) => {
            setAccessToken(token);
            setToken(token);
        },
        [setAccessToken]
    );

    const disableAuth = useCallback(() => {
        setAccessToken('');
        setToken('');
    }, []);

    return {
        isLogged: Boolean(accessToken),
        activateAuth,
        disableAuth,
        teamSelected,
        setTeamSelected,
    };
};
