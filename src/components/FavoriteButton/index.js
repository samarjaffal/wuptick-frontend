import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUser';
import { MeQuery } from '../../requests/MeQuery';
import { ToggleFavTaskMutation } from '../../requests/User/ToggleFavTaskMutation';
import { Colors } from '../../assets/css/colors';
import { Star } from './styles';

export const FavoriteButton = ({ taskId }) => {
    const [active, setActive] = useState(false);
    const { isFavoriteTask } = useUser();
    const inactiveColor = Colors.softGray;
    const activeColor = Colors.yellow;

    return (
        <ToggleFavTaskMutation>
            {({ doToggleFav }) => (
                <MeQuery>
                    {({ data }) => {
                        const favTasks = data.me.favorite_tasks;
                        return (
                            <span
                                className="FavoriteOption"
                                onClick={() => {
                                    setActive(!active);
                                    doToggleFav(
                                        !isFavoriteTask(taskId, favTasks),
                                        taskId
                                    );
                                }}
                            >
                                <Star
                                    icon="star"
                                    color={
                                        isFavoriteTask(taskId, favTasks)
                                            ? activeColor
                                            : inactiveColor
                                    }
                                    animation-name={active ? 'spin' : undefined}
                                    animation-duration={
                                        active s? '1000ms' : undefined
                                    }
                                />
                            </span>
                        );
                    }}
                </MeQuery>
            )}
        </ToggleFavTaskMutation>
    );
};

FavoriteButton.propTypes = {
    taskId: PropTypes.string,
};
