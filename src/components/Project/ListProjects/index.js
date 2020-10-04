import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectItem } from '../ProjectItem';
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

export const ListProjects = ({ teams }) => {
    return teams.map((team, index) => {
        return (
            <DropDown key={index} title={`Team: ${team.name}`}>
                {team.projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </DropDown>
        );
    });
};

DropDown.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
};
