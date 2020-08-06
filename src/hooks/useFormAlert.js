import { useState, useLayoutEffect } from 'react';
import idx from 'idx';
import { navigate } from '@reach/router';
import { useUser } from './useUser';

export const useFormAlert = (data, type) => {
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const { activateAuth } = useUser();

    useLayoutEffect(() => {
        const typename = idx(data, (d) => d[type].__typename);
        if (typename == null) return;
        if (typename.indexOf('Error') !== -1) {
            setMessage(data[type].message);
            setShowAlert(true);
        } else if (typename !== null && typename !== undefined) {
            setShowAlert(false);
            setMessage('');
            navigate('/');
            if ('token' in data[type]) activateAuth(data[type].token);
        }
    }, [data]);

    return {
        message,
        showAlert,
    };
};
