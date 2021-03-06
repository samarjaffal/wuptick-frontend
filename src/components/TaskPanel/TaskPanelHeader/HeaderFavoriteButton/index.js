import React from 'react';
import PropTypes from 'prop-types';
import { MinimalButton } from '../../../MinimalButton/index';
import { FavoriteButton } from '../../../FavoriteButton/index';
import { MeQuery } from '../../../../requests/MeQuery';
import { Colors } from '../../../../assets/css/colors';

export const HeaderFavoriteButton = ({ task }) => {
    return (
        <div className="HeaderFavoriteButton">
            <MinimalButton
                color={Colors.secondary}
                hover={Colors.hover}
                size={35}
                bg={Colors.whitePrimary}
            >
                {(isParentHover) => (
                    <MeQuery>
                        {({ data }) => {
                            const favTasks =
                                data !== null ? data.me.favorite_tasks : [];
                            return (
                                <FavoriteButton
                                    taskId={task._id}
                                    favTasks={favTasks}
                                    isParentHover={isParentHover}
                                    inactiveColor={Colors.secondary}
                                    activeColor={Colors.yellow}
                                />
                            );
                        }}
                    </MeQuery>
                )}
            </MinimalButton>
        </div>
    );
};

HeaderFavoriteButton.propTypes = {
    task: PropTypes.object,
};
