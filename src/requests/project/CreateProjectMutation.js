import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateProject } from '../graphql/gqlCreateProject';
import { gqlMe } from '../graphql/gqlMe';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const CreateProjectMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [createProject, { error, loading, data }] = useMutation(
        gqlCreateProject,
        {
            onCompleted: (data) => {
                console.log('CreateProjectMutation', data);
                modalRef.current.closeModal();
                addNotification(
                    customTitles.success,
                    'Project Created',
                    customTypes.success
                );
            },
        }
    );

    const doCreateProject = useCallback((input) => {
        createProject({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlMe,
                },
            ],
            /*   update: (store, { data }) => {
                const MeData = store.readQuery({
                    query: MeQuery,
                });
                console.log(MeData, 'MeData');

                store.writeQuery({
                    query: MeQuery,
                    data: {
                        me: {
                            projects: [
                                ...MeData.me.projects,
                                data.createProject,
                            ],
                        },
                    },
                });
            }, */
        });
    });

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doCreateProject, loading, error, data });
};

CreateProjectMutation.propTypes = {
    children: PropTypes.any,
};
