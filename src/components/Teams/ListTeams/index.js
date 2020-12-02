import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { TeamItem } from './TeamItem/index';
import { NoData } from '../../NoData/index';
import { TeamDropDown } from '../TeamDropDown/index';
import { OutsideClick } from '../../OutsideClick/index';
import { useUser } from '../../../hooks/useUser';
import { useDropdown } from '../../../hooks/useDropdown';

export const ListTeams = ({ teams, userId }) => {
    const [team, setTeam] = useState({});
    const { currentUser } = useUser();
    const { openDropCallBack } = useDropdown();

    const setTeamSelected = (team) => {
        setTeam(team);
    };

    const handleDropDown = (value = null) => {
        value = value == null ? true : value;
        openDropCallBack(value);
    };

    return (
        <>
            {teams.length > 0 ? (
                teams.map((team, index) => (
                    <TeamItem
                        key={index}
                        team={team}
                        userId={userId}
                        setTeamSelected={setTeamSelected}
                    />
                ))
            ) : (
                <NoData message="This user does not have teams yet." />
            )}
            {currentUser._id == userId &&
                ReactDom.createPortal(
                    <OutsideClick setLocalDropDownState={handleDropDown}>
                        <TeamDropDown teamId={team._id} />
                    </OutsideClick>,
                    document.getElementById('dropwdown-app')
                )}
        </>
    );
};

ListTeams.propTypes = {
    teams: PropTypes.array,
    userId: PropTypes.string,
};
