import { useEffect } from 'react';
import { useDropdown } from './useDropdown';
export const useOutsideClick = (setLocalDropDownState, ref) => {
    const { open, setOpen } = useDropdown();
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && open) {
                setOpen(false);
                setLocalDropDownState(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, open]);
};
