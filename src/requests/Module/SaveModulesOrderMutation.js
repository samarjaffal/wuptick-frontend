import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlSaveModulesOrder } from '../graphql/gqlSaveModulesOrder';
import { gqlGetProjectModules } from '../graphql/gqlGetProjectModules';
import { gqlGetProject } from '../graphql/gqlGetProject';
import PropTypes from 'prop-types';

export const SaveModulesOrderMutation = ({ children }) => {
    const [saveOrder, { error, loading, data }] = useMutation(
        gqlSaveModulesOrder,
        {
            onCompleted: (data) => {
                console.log('SaveModulesOrderMutation', data);
            },
        }
    );

    const doSaveOrder = useCallback((moduleIds, projectId) => {
        saveOrder({
            variables: {
                moduleIds,
                projectId,
            },
            update: (store) => {
                const modulesData = store.readQuery({
                    query: gqlGetProjectModules,
                    variables: { projectId },
                });

                let newModulesOrder = modulesData.getProjectModules.sort(
                    function (a, b) {
                        return (
                            moduleIds.indexOf(a._id) - moduleIds.indexOf(b._id)
                        );
                    }
                );

                store.writeQuery({
                    query: gqlGetProjectModules,
                    variables: { projectId },
                    data: {
                        getProjectModules: [...newModulesOrder],
                    },
                });
            },
        });
    });
    /* 
    if (loading) {
        console.log('loading');
    } */

    if (error) {
        console.error(error, 'error');
    }
    return children({ doSaveOrder, loading, error, data });
};

SaveModulesOrderMutation.propTypes = {
    children: PropTypes.any,
};
