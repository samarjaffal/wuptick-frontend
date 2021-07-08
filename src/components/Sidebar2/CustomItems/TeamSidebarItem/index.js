import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SidebarSubItem } from '../../SidebarSubItem/index';
import { ProjectSidebarItem } from '../ProjectsSidebarItem/ProjectSidebarItem/index';
import { Colors } from '../../../../assets/css/colors';
import { Ul } from './styles';

export const TeamSidebarItem = ({ team }) => {
    const [show, setShow] = useState(false);
    const arrow = show ? 'caret-up' : 'caret-right';

    const toggleShow = () => {
        setShow(!show);
    };

    return (

        <SidebarSubItem
            title={team.name}
            color={Colors.primary}
            arrow={arrow}
            onClick={toggleShow}
            key={team._id}
            hasIcon={false}
            goTo={() => { }}
        >
            <Ul show={show ? 'block' : 'none'}>
                {
                    team.projects.map((project) => (
                        <ProjectSidebarItem
                            key={project._id}
                            project={project}
                            team={team}
                        />
                    ))
                }
            </Ul>
        </SidebarSubItem>
    )
}

TeamSidebarItem.propTypes = {
    team: PropTypes.object
}