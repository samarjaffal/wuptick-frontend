import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateModule } from '../graphql/gqlCreateModule';
import { gqlGetProjectModules } from '../graphql/gqlGetProjectModules';
import PropTypes from 'prop-types';

export const CreateModuleMutation = ({ children }) => {
    const [createModule, { error, loading, data }] = useMutation(
        gqlCreateModule,
        {
            onCompleted: (data) => {
                console.log('CreateModuleMutation', data);
            },
        }
    );

    const doCreateModule = useCallback((input) => {
        createModule({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetProjectModules,
                    variables: { projectId: input.project._id },
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
    return children({ doCreateModule, loading, error, data });
};

CreateModuleMutation.propTypes = {
    children: PropTypes.any,
};
