import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../assets/css/colors';
import { Star } from './styles';

export const FavoriteButton = () => {
    const [active, setActive] = useState(false);
    const inactiveColor = Colors.softGray;
    const activeColor = Colors.yellow;

    return (
        <span className="FavoriteOption" onClick={() => setActive(!active)}>
            <Star
                icon="star"
                color={active ? activeColor : inactiveColor}
                animation-name={active ? 'spin' : undefined}
                animation-duration={active ? '1000ms' : undefined}
            />
        </span>
    );
};

FavoriteButton.propTypes = {};
