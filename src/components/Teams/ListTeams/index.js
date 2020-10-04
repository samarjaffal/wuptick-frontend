import React from 'react';
import { TeamItem } from './TeamItem/index';
import { NoData } from '../../NoData/index';

export const ListTeams = ({ teams, userId }) => {
    {
        return teams.length > 0 ? (
            teams.map((team, index) => (
                <TeamItem key={index} team={team} userId={userId} />
            ))
        ) : (
            <NoData message="This user does not have teams yet." />
        );
    }
};
