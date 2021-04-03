import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../../components/Image/index';
import { MembersList } from '../../../components/MembersList/index';
import { FavoriteButton } from '../../../components/FavoriteButton/index';
import { GetProjectModules } from '../../../requests/Module/getProjectModuleQuery';
import { ModuleTitle, ModulesList, ProjectTitle, TitleSection } from './styles';

export const ModuleSidebar = ({ project = {} }) => {
    const members = project.members.map((member) => member.user);
    return (
        <div className="ProjectContainer">
            <div className="Project">
                <div
                    className="ProjectName"
                    style={{
                        display: 'flex',
                    }}
                >
                    <Image size={30} src={project.image} />
                    <div style={{ marginLeft: '0.5em' }}>
                        <ProjectTitle to={`/project/${project._id}`}>
                            {project.name}
                        </ProjectTitle>
                        <FavoriteButton />
                    </div>
                </div>
                <div
                    className="MembersContainer"
                    style={{ marginTop: '1.5em' }}
                >
                    <TitleSection>
                        <span>Members</span>
                    </TitleSection>
                    <MembersList members={members} />
                </div>

                <div
                    className="ModulesContainer"
                    style={{ marginTop: '1.5em' }}
                >
                    <TitleSection>
                        <span>Modules</span>
                    </TitleSection>
                    <ModulesList>
                        <GetProjectModules projectId={project._id}>
                            {({ data, loading }) => {
                                if (loading) {
                                    return 'loading...';
                                }
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
                </div>
            </div>
        </div>
    );
};

ModuleSidebar.propTypes = {};
