import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlUpdateMemberRole } from '../graphql/gqlUpdateMemberRole';
import { gqlGetProject } from '../graphql/gqlGetProject';
import PropTypes from 'prop-types';

export const UpdateMemberRoleMutation = ({ children }) => {
    const [updateRole, { error, loading, data }] = useMutation(
        gqlUpdateMemberRole,
        {
            onCompleted: (data) => {
                console.log('UpdateMemberRoleMutation', data);
            },
        }
    );

    const doUpdateRole = useCallback((projectId, userId, roleId) => {
        updateRole({
            variables: {
                projectId,
                userId,
                roleId,
            },
            update: (store, { data }) => {
                const projectData = store.readQuery({
                    query: gqlGetProject,
                    variables: { projectId },
                });
                const tempProjectData = { ...projectData };

                const { getProject: Project } = tempProjectData;

                const newMembers = Project.members.map((member) => {
                    if (member.user._id == userId) {
                        member.role = { ...data.updateMemberRole };
                    }
                    return member;
                });

                Project.members = newMembers;
            },
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doUpdateRole, loading, error, data });
};

UpdateMemberRoleMutation.propTypes = {
    children: PropTypes.any,
};
