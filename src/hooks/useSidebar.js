import { useContext, useEffect } from 'react';
import Context from '../context/SidebarContext';
import { useSmallScreen } from './useSmallScreen';

export const useSidebar = () => {
    const { isCollapsed, setCollapsed } = useContext(Context);
    const { match, screen, setMatch } = useSmallScreen();

    const body = document.body;

    useEffect(() => {
        setMatch(screen.matches);
        if (match) {
            setCollapsed(true);
        } else {
            body.style.overflow = 'auto';
        }
    }, [match]);

    const collapseMobile = (value) => {
        setCollapsed(value);
        body.style.overflow = value ? 'auto' : 'hidden';
    };

    const collapse = (value) => {
        setCollapsed(value);
    };

    const handleCollapse = (value) => {
        return match ? collapseMobile(value) : collapse(value);
    };

    return {
        handleCollapse,
        match,
        isCollapsed,
        setCollapsed,
    };
};
