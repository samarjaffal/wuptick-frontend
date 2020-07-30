import { useContext } from 'react';
import Context from '../context/UserContext';

export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
};
