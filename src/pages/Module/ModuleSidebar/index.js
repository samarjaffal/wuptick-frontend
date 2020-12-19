import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../../components/Image/index';
import { MembersList } from '../../../components/MembersList/index';
import { FavoriteButton } from '../../../components/FavoriteButton/index';
import { GetProjectModules } from '../../../requests/Module/getProjectModuleQuery';
import { ModuleTitle, ModulesList, ProjectTitle, TitleSection } from './styles';

/* const members = [
    {
        _id: 1,
        name: 'Sam',
        last_name: 'Jaffal',
        avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
    {
        _id: 2,
        name: 'Sam',
        last_name: 'Jaffal',
        avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
    {
        _id: 3,
        name: 'Sam',
        last_name: 'Jaffal',
        avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
    {
        _id: 4,
        name: 'Sam',
        last_name: 'Jaffal',
        avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
]; */

export const ModuleSidebar = ({ project = {} }) => {
    console.log(project, 'project');
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
                        <ProjectTitle>{project.name}</ProjectTitle>
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
                            {({ data }) => {
                                const modules = data.getProjectModules;
                                return modules.map((module, index) => (
                                    <li key={index}>
                                        <ModuleTitle to="#">
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
