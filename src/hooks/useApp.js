import { useCallback, useEffect } from 'react';
import { useUser } from './useUser';

export const useApp = () => {
    const { setTeam, currentUser } = useUser();

    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            if ('teams' in currentUser) {
                initTeam();
            }
        }
    }, [currentUser]);

    const initTeam = useCallback(() => {
        const lsTeamId = localStorage.getItem('teamSelected');
        let team =
            lsTeamId !== null && typeof lsTeamId !== undefined
                ? currentUser.teams.find((team) => team._id == lsTeamId)
                : currentUser.teams[0];
        setTeam(team);
    }, [currentUser]);

    const initApp = () => {
        initTeam();
    };

    return {
        initApp,
    };
};
