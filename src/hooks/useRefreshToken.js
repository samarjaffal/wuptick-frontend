const URL = 'http://localhost:27017/refresh_token';
import { useState, useEffect } from 'react';
import { useUser } from '../hooks/useUser';

export const useRefreshToken = () => {
    const [refreshToken, setRefreshToken] = useState(false);
    const [error, setError] = useState(false);
    const { activateAuth, setLoading, loading } = useUser();
    useEffect(() => {
        fetch(URL, {
            method: 'POST',
            credentials: 'include',
        })
            .then(async (data) => {
                const { token } = await data.json();
                setLoading(false);
                activateAuth(token);
                setRefreshToken(true);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
                setRefreshToken(false);
            });
    }, []);

    return { refreshToken, loading, error };
};
