import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectItem } from '../ProjectItem';
import { NoData } from '../../NoData/index';
import { Title, DropDownContainer, Button, Collapsed } from './styles';

const DropDown = ({ title, children }) => {
    const [isOpen, setOpen] = useState(true);
    return (
        <div>
            <DropDownContainer>
                <Button onClick={() => setOpen(!isOpen)}>
                    <FontAwesomeIcon
                        icon={isOpen ? 'caret-down' : 'caret-right'}
                    />
                </Button>
                <Title>{title}</Title>
            </DropDownContainer>
            <Collapsed open={isOpen}>{children}</Collapsed>
        </div>
    );
};

export const ListProjects = ({ teams, userId }) => {
    {
        return teams.length > 0 ? (
            teams.map((team, index) => {
                return (
                    <DropDown key={index} title={`Team: ${team.name}`}>
                        {team.projects.map((project, index) => (
                            <ProjectItem
                                key={index}
                                project={project}
                                userId={userId}
                                teamId={team._id}
                            />
                        ))}
                    </DropDown>
                );
            })
        ) : (
            <NoData message="This user has no projects yet." />
        );
    }
};

DropDown.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
};
