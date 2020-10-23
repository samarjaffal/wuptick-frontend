import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlUpdateModuleStatus } from '../graphql/gqlUpdateModuleStatus';
import PropTypes from 'prop-types';

export const UpdateModuleStatusMutation = ({ children }) => {
    const [updateModule, { error, loading, data }] = useMutation(
        gqlUpdateModuleStatus,
        {
            onCompleted: (data) => {
                console.log('UpdateModuleStatusMutation', data);
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

UpdateModuleStatusMutation.propTypes = {
    children: PropTypes.any,
};
