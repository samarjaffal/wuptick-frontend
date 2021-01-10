import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BoxOption, BoxOptionContainer, BoxOptionName } from './styles';

export const MinimalButton = ({ color, name, children }) => {
    const [isParentHover, setIsParentHover] = useState(false);

    return (
        <BoxOption
            color={color}
            onMouseEnter={() => setIsParentHover(true)}
            onMouseLeave={() => setIsParentHover(false)}
        >
            <BoxOptionContainer>
                {children(isParentHover)}
                {name && <BoxOptionName color={color}>{name}</BoxOptionName>}
            </BoxOptionContainer>
        </BoxOption>
    );
};

MinimalButton.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.any,
};
