import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUser';
import { ToggleFavTaskMutation } from '../../requests/User/ToggleFavTaskMutation';
import { Colors } from '../../assets/css/colors';
import { Star } from './styles';

const MemoFavoriteButton = ({
    taskId,
    favTasks = [],
    isParentHover = false,
    inactiveColor = Colors.softGray,
    activeColor = Colors.yellow,
}) => {
    const { isFavoriteTask } = useUser();
    const [active, setActive] = useState(isFavoriteTask(taskId, favTasks));
    const [color, setColor] = useState(
        isParentHover ? Colors.secondary : active ? activeColor : inactiveColor
    );
    const id = `button-favStar-${taskId}-${Math.floor(Math.random() * 100)}`;

    useEffect(() => {
        setActive(isFavoriteTask(taskId, favTasks));
        setColor(
            isFavoriteTask(taskId, favTasks) ? activeColor : inactiveColor
        );
    }, [isFavoriteTask(taskId, favTasks)]);

    const toggleStar = (status, saveState) => {
        setActive(status);
        setColor(status ? activeColor : inactiveColor);
        const favButton = document.getElementById(id);
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
                    <Star icon="star" color={color} id={id} />
                </span>
            )}
        </ToggleFavTaskMutation>
    );
};

MemoFavoriteButton.propTypes = {
    taskId: PropTypes.string,
    favTasks: PropTypes.array,
    isParentHover: PropTypes.bool,
    inactiveColor: PropTypes.string,
    activeColor: PropTypes.string,
};

function areEqual(prevProps, nextProps) {
    return prevProps.favTasks === nextProps.favTasks;
}

export const FavoriteButton = React.memo(MemoFavoriteButton, areEqual);
