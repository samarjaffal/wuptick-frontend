import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlDeleteModule } from '../graphql/gqlDeleteModule';
import { gqlGetProjectModules } from '../graphql/gqlGetProjectModules';
import PropTypes from 'prop-types';

export const DeleteModuleMutation = ({ children }) => {
    const [deleteModule, { error, loading, data }] = useMutation(
        gqlDeleteModule,
        {
            onCompleted: (data) => {
                console.log('DeleteModuleMutation', data);
            },
        }
    );

    const doDeleteModule = useCallback((moduleId, projectId) => {
        deleteModule({
            variables: {
                moduleId,
            },
            refetchQueries: [
                {
                    query: gqlGetProjectModules,
                    variables: { projectId },
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
    return children({ doDeleteModule, loading, error, data });
};

DeleteModuleMutation.propTypes = {
    children: PropTypes.any,
};
