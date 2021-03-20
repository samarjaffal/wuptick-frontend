import { config } from '../../config/index';
const URL = `${config.backUrl}refresh_token`;
import { useState, useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import { useApp } from './useApp';

export const useRefreshToken = () => {
    const [refreshToken, setRefreshToken] = useState(false);
    const [error, setError] = useState(false);
    const { activateAuth, setLoading, loading } = useUser();
    const { initApp } = useApp();

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
                console.log('error refresh token');
                setError(error);
                setLoading(false);
                setRefreshToken(false);
            });
    }, []);

    return { refreshToken, loading, error };
};
