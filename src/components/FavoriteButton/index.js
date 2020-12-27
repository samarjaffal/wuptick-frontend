import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUser';
import { ToggleFavTaskMutation } from '../../requests/User/ToggleFavTaskMutation';
import { Colors } from '../../assets/css/colors';
import { Star } from './styles';

export const FavoriteButton = ({ taskId, favTasks = [] }) => {
    const [active, setActive] = useState(false);
    const { isFavoriteTask } = useUser();
    const inactiveColor = Colors.softGray;
    const activeColor = Colors.yellow;

    useEffect(() => {
        if (favTasks.length > 0) {
            if (isFavoriteTask(taskId, favTasks)) {
                setActive(true);
            }
        }
    }, []);

    const toggleStar = (status, saveState) => {
        setActive(status);
        const favButton = document.getElementById(`button-favStar-${taskId}`);
        if (status) {
            favButton.style.animationName = 'spin';
            favButton.style.animationDuration = '1000ms';
        } else {
            favButton.style.animationName = 'none';
            favButton.style.animationDuration = '0';
        }
        saveState();
    };

    return (
        <ToggleFavTaskMutation>
            {({ doToggleFav }) => (
                <span
                    className="FavoriteOption"
                    onClick={() => {
                        toggleStar(!active, () => {
                            doToggleFav(!active, taskId);
                        });
                    }}
                >
                    <Star
                        icon="star"
                        color={active ? activeColor : inactiveColor}
                        id={`button-favStar-${taskId}`}
                    />
                </span>
            )}
        </ToggleFavTaskMutation>
    );
};

FavoriteButton.propTypes = {
    taskId: PropTypes.string,
    favTasks: PropTypes.array,
};
