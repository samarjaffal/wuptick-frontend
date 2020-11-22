import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlEditProject } from '../graphql/gqlEditProject';
import { gqlMe } from '../graphql/gqlMe';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const EditProjectMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [editProject, { error, loading, data }] = useMutation(
        gqlEditProject,
        {
            onCompleted: (data) => {
                console.log('EditProjectMutation', data);
                modalRef.current.closeModal();
                addNotification(
                    customTitles.success,
                    'Project Updated 👏',
                    customTypes.success
                );
            },
        }
    );

    const doEditProject = useCallback((projectId, input) => {
        editProject({
            variables: {
                projectId,
                input,
            },
            refetchQueries: [
                {
                    query: gqlMe,
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
    return children({ doEditProject, loading, error, data });
};

EditProjectMutation.propTypes = {
    children: PropTypes.any,
};
