import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlUpdateModuleName } from '../graphql/gqlUpdateModuleName';
import PropTypes from 'prop-types';

export const UpdateModuleNameMutation = ({ children }) => {
    const [updateModule, { error, loading, data }] = useMutation(
        gqlUpdateModuleName,
        {
            onCompleted: (data) => {
                console.log('UpdateModuleNameMutation', data);
            },
        }
    );

    const doUpdateModule = useCallback((data) => {
        updateModule({
            variables: {
                moduleId: data.moduleId,
                input: data.input,
            },
        });
    });

    /*  if (loading) {
        console.log('loading');
    } */

    if (error) {
        console.error(error, 'error');
    }
    return children({ doUpdateModule, loading, error, data });
};

UpdateModuleNameMutation.propTypes = {
    children: PropTypes.any,
};
