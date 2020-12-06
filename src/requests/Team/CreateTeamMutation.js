import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlCreateTeam } from '../graphql/gqlCreateTeam';
import { gqlMe } from '../graphql/gqlMe';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const CreateTeamMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [createTeam, { error, loading, data }] = useMutation(gqlCreateTeam, {
        onCompleted: (data) => {
            console.log('CreateTeamMutation', data);
            modalRef.current.closeModal();
            addNotification(
                customTitles.success,
                'Team Created 👏',
                customTypes.success
            );
        },
    });

    const doCreateTeam = useCallback((input) => {
        createTeam({
            variables: {
                input,
            },
            refetchQueries: [
                {
                    query: gqlMe,
                },
                {
                    query: gqlGetUser,
                    variables: {
                        userId: input.owner._id,
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
    return children({ doCreateTeam, loading, error, data });
};

CreateTeamMutation.propTypes = {
    children: PropTypes.any,
};
