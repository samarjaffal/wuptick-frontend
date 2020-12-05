import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlEditTeam } from '../graphql/gqlEditTeam';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const EditTeamMutation = ({ children }) => {
    const { currentUser } = useUser();
    const [editTeam, { error, loading, data }] = useMutation(gqlEditTeam, {
        onCompleted: (data) => {
            console.log('EditTeamMutation', data);
        },
    });

    const doEditTeam = useCallback((teamId, input) => {
        editTeam({
            variables: {
                teamId,
                input,
            },
            refetchQueries: [
                {
                    query: gqlGetUser,
                    variables: { userId: currentUser._id },
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
    return children({ doEditTeam, loading, error, data });
};

EditTeamMutation.propTypes = {
    children: PropTypes.any,
};
