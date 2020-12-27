import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../hooks/useUser';
import { MeQuery } from '../../requests/MeQuery';
import { Colors } from '../../assets/css/colors';
import { Star } from './styles';

export const FavoriteButton = ({ taskId }) => {
    const [active, setActive] = useState(false);
    const { isFavoriteTask } = useUser();
    const inactiveColor = Colors.softGray;
    const activeColor = Colors.yellow;

    return (
        <span className="FavoriteOption" onClick={() => setActive(!active)}>
            <MeQuery>
                {({ data }) => {
                    let favTasks = data.me.favorite_tasks;

                    return (
                        <Star
                            icon="star"
                            color={
                                active || isFavoriteTask(taskId, favTasks)
                                    ? activeColor
                                    : inactiveColor
                            }
                            animation-name={active ? 'spin' : undefined}
                            animation-duration={active ? '1000ms' : undefined}
                        />
                    );
                }}
            </MeQuery>
        </span>
    );
};

FavoriteButton.propTypes = {
    taskId: PropTypes.string,
};
