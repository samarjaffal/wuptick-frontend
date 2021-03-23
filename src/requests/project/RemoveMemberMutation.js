import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveMember } from '../graphql/gqlRemoveMember';
import { gqlGetProject } from '../graphql/gqlGetProject';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { Notification } from '../../shared/Notification';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const RemoveMemberMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const { setCurrentProject, currentProject } = useUser();
    const [removeMember, { error, loading, data }] = useMutation(
        gqlRemoveMember,
        {
            onCompleted: (data) => {
                console.log('RemoveMemberMutation', data);
                if (modalRef) {
                    modalRef.current.closeModal();
                }
                addNotification(
                    customTitles.success,
                    'Removed Member successfully ✅',
                    customTypes.success
                );
            },
        }
    );

    const doRemoveMember = useCallback((projectId, userId) => {
        removeMember({
            variables: {
                projectId,
                userId,
            },
            update: (store, { data }) => {
                const projectData = store.readQuery({
                    query: gqlGetProject,
                    variables: { projectId },
                });

                console.log(projectData, 'projectData');

                const tempData = { ...projectData.getProject };

                let { members } = tempData;

                members = members.filter(
                    (member) => member.user._id !== userId
                );
                store.writeQuery({
                    query: gqlGetProject,
                    variables: { projectId },
                    data: {
                        getProject: {
                            ...projectData.getProject,
                            members: members,
                        },
                    },
                });

                setCurrentProject({ ...currentProject, members: members });
            },
            refetchQueries: [
                {
                    query: gqlGetProject,
                    variables: { projectId },
                },
                {
                    query: gqlGetUser,
                    variables: {
                        userId,
                    },
                },
            ],
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doRemoveMember, loading, error, data });
};

RemoveMemberMutation.propTypes = {
    children: PropTypes.any,
};
