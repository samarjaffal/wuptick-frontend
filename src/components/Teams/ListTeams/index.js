import React from 'react';
import { TeamItem } from './TeamItem/index';
export const ListTeams = ({ teams }) => {
    return teams.map((team, index) => <TeamItem key={index} team={team} />);
};
