import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '../../../../Image/index';
import { SidebarSubItem } from '../../../SidebarSubItem/index';
import { GetProjectModules } from '../../../../../requests/Module/getProjectModuleQuery';
import { useUser } from '../../../../../hooks/useUser';
import { useAvatar } from '../../../../../hooks/useAvatar';
import { Colors } from '../../../../../assets/css/colors';
import { ModuleTitle, ModulesList } from './styles';

export const ProjectSidebarItem = ({ team, project }) => {
    const [show, setShow] = useState(false);

    const { goToModule, goToProject } = useUser();
    const { generateProjectAvatar } = useAvatar({});

    const toggleShow = () => {
        setShow(!show);
    };

    const navigateToProject = () => {
        goToProject(team, project);
    };

    const arrow = show ? 'caret-up' : 'caret-right';

    let projectImage = generateProjectAvatar(project);

    return (
        <>
            <SidebarSubItem
                title={project.name}
                icon={Image}
                iconProps={{ size: 22, src: projectImage }}
                fIcon={false}
                goTo={navigateToProject}
                color={Colors.primary}
                onClick={toggleShow}
                arrow={arrow}
            >
                <ModulesList
                    id={`modules-list-${project._id}`}
                    show={show ? 'block' : 'none'}
                >
                    <GetProjectModules projectId={project._id}>
                        {({ data, loading }) => {
                            if (loading) {
                                return 'loading...';
                            }
                            const modules = data.getProjectModules;
                            return modules.map((module, index) => (
                                <li key={index}>
                                    <ModuleTitle
                                        onClick={() =>
                                            goToModule(team, project, module)
                                        }
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
