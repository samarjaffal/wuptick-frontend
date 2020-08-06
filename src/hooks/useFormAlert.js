import { useState, useLayoutEffect } from 'react';
import idx from 'idx';
import { navigate } from '@reach/router';
export const useFormAlert = (data) => {
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useLayoutEffect(() => {
        const typename = idx(data, (d) => d.register.__typename);
        if (typename === 'User') {
            setShowAlert(false);
            setMessage('');
            navigate('/');
        } else if (typename === 'AuthUserExistError') {
            setMessage(data.register.message);
            setShowAlert(true);
        }
    }, [data]);

    return {
        message,
        showAlert,
    };
};
