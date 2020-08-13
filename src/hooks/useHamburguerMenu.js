import { useRef, useState, useEffect } from 'react';
import { useSmallScreen } from './useSmallScreen';

export const useHamburguerMenu = () => {
    const { screen, match, setMatch } = useSmallScreen();
    const burguerButton = useRef(null);

    const [isActive, setIsActive] = useState(false);
    const isActiveRef = useRef(isActive);

    useEffect(() => {
        setMatch(screen.matches);
        if (match) {
            burguerButton.current.addEventListener('click', toggle);
            return () => {
                burguerButton.current.removeEventListener('click', toggle);
            };
        }
    }, [match]);

    const toggle = () => {
        isActiveRef.current = !isActiveRef.current;
        setIsActive(isActiveRef.current);
    };

    return { isActive, burguerButton };
};
