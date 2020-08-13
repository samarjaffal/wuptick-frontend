import { useState } from 'react';

const SIZE = 'screen and (max-width: 767px)';

export const useSmallScreen = () => {
    const screen = window.matchMedia(SIZE);
    screen.addListener(validation);

    const [match, setMatch] = useState(false);

    function validation({ matches }) {
        if (matches) {
            setMatch(true);
        } else {
            setMatch(false);
        }
    }

    return { screen, match, setMatch };
};
