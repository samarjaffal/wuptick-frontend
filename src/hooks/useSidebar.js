import { useContext } from 'react';
import Context from '../context/SidebarContext';
export const useSidebar = () => {
    const { isCollapsed, setCollapsed } = useContext(Context);

    return {
        isCollapsed,
        setCollapsed,
    };
};
