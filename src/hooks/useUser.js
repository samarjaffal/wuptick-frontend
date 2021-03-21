import { useContext, useCallback } from 'react';
import dayjs from 'dayjs';
import Context from '../context/UserContext';
import { navigate } from '@reach/router';
import { setAccessToken as setToken } from '../shared/GetAccessToken';
import jwtDecode from 'jwt-decode';

export const useUser = () => {
    const {
        accessToken,
        setAccessToken,
        teamSelected,
        setTeamSelected,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        currentProject,
        setCurrentProject,
        currentModule,
        setCurrentModule,
        currentTask,
        setCurrentTask,
    } = useContext(Context);

    const activateAuth = useCallback(
        (token) => {
            setAccessToken(token);
            setToken(token);
            setUserInfo(token);
        },
        [setAccessToken]
    );

    const setUserInfo = useCallback(async (token) => {
        let decodedToken = await jwtDecode(token);
        setCurrentUser({
            _id: decodedToken._id,
            name: decodedToken.name,
            last_name: decodedToken.last_name,
            email: decodedToken.email,
            user_attempts: decodedToken.user_attempts,
        });
    });

    const disableAuth = useCallback(() => {
        setAccessToken('');
        setToken('');
        localStorage.removeItem('teamSelected');
    }, []);

    const getAge = useCallback((bornDate) => {
        const currentYear = dayjs().format('YYYY');
        const bornYear = dayjs(bornDate).format('YYYY');
        let age = currentYear - bornYear;

        const month = dayjs().format('M') - dayjs(bornDate).format('M');
        if (
            month < 0 ||
            (month === 0 && dayjs().format('L') < dayjs(bornDate).format('L'))
        ) {
            age = age - 1;
        }
        return age;
    });

    const generateProfileUrl = (name, lastName, id) => {
        const profile = `${name}-${lastName}-${id}`;
        const url = `/profile/${profile}`;
        return url;
    };

    const generateProjectUrl = (projedId) => {
        const url = `/project/${projedId}`;
        return url;
    };

    const generateModuleUrl = (projedId, moduleId) => {
        const url = `/project/${projedId}/module/${moduleId}`;
        return url;
    };

    const isFavoriteTask = (taskId, tasks) => {
        let tasksIds = tasks.map((task) => task._id);
        return tasksIds.includes(taskId);
    };

    const setTeam = (team) => {
        setTeamSelected(team);
        localStorage.setItem('teamSelected', team._id);
    };

    const goToProject = useCallback((team, project) => {
        setTeam(team);
        setCurrentProject(project);
        navigate(generateProjectUrl(project._id));
    }, []);

    const goToModule = useCallback((team, project, module) => {
        setTeam(team);
        setCurrentProject(project);
        setCurrentModule(module);
        navigate(generateModuleUrl(project._id, module._id));
    }, []);

    const nameUrl = `${currentUser.name}-${currentUser.last_name}`;
    const profileURL = `profile/${nameUrl}-${currentUser._id}`;

    return {
        isLogged: Boolean(accessToken),
        activateAuth,
        disableAuth,
        teamSelected,
        setTeamSelected,
        setTeam,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        profileURL,
        currentProject,
        setCurrentProject,
        currentModule,
        setCurrentModule,
        currentTask,
        setCurrentTask,
        getAge,
        generateProfileUrl,
        generateProjectUrl,
        isFavoriteTask,
        goToProject,
        goToModule,
    };
};
