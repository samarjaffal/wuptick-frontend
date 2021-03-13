import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '../../../../Image/index';
import { SidebarSubItem } from '../../../SidebarSubItem/index';
import { GetProjectModules } from '../../../../../requests/Module/getProjectModuleQuery';
import { Colors } from '../../../../../assets/css/colors';
import { ModuleTitle, ModulesList } from './styles';

export const ProjectSidebarItem = ({ project }) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    const arrow = show ? 'caret-up' : 'caret-right';

    return (
        <>
            <SidebarSubItem
                title={project.name}
                icon={Image}
                iconProps={{ size: 22, src: project.image }}
                fIcon={false}
                url={`/project/${project._id}`}
                color={Colors.primary}
                onClick={toggleShow}
                arrow={arrow}
            >
                <ModulesList
                    id={`modules-list-${project._id}`}
                    show={show ? 'block' : 'none'}
                >
                    <GetProjectModules projectId={project._id}>
                        {({ data }) => {
                            const modules = data.getProjectModules;
                            return modules.map((module, index) => (
                                <li key={index}>
                                    <ModuleTitle
                                        to={`/project/${project._id}/module/${module._id}`}
                                    >
                                        {module.name}
                                    </ModuleTitle>
                                </li>
                            ));
                        }}
                    </GetProjectModules>
                </ModulesList>
            </SidebarSubItem>
        </>
    );
};

ProjectSidebarItem.propTypes = {
    project: PropTypes.object,
};
