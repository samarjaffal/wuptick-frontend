import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRegisterUserByInvitation } from '../graphql/gqlRegisterUserByInvitationMutation';
import { gqlGetInvitationsForProject } from '../graphql/gqlGetInvitationsForProject';
import { gqlGetProject } from '../graphql/gqlGetProject';
import PropTypes from 'prop-types';
import idx from 'idx';

export const RegisterUserByInvitationMutation = ({ children }) => {
    const [registerInvitation, { error, loading, data }] = useMutation(
        gqlRegisterUserByInvitation,
        {
            onCompleted: () => {
                console.log('RegisterUserByInvitation', data);
            },
        }
    );
    const doRegisterInvitation = useCallback((input) => {
        registerInvitation({
            variables: {
                email: input.email,
                projectId: input.projectId,
                teamId: input.teamId,
            },
            update: (store, { data }) => {
                const typename = idx(
                    data,
                    (d) => d['registerUserByInvitation'].__typename
                );

                if (typename == 'Invitation') {
                    const invitationsData = store.readQuery({
                        query: gqlGetInvitationsForProject,
                        variables: { projectId: input.projectId },
                    });
                    console.log(invitationsData, 'invitationsData');
                    store.writeQuery({
                        query: gqlGetInvitationsForProject,
                        variables: { projectId: input.projectId },
                        data: {
                            getInvitationsForProject: [
                                ...invitationsData.getInvitationsForProject,
                                data.registerUserByInvitation,
                            ],
                        },
                    });
                }
            },
            refetchQueries: [
                {
                    query: gqlGetProject,
                    variables: { projectId: input.projectId },
                },
            ],
        });
    });

    /*  if (loading) {
        return 'loading edit user mutation...';
    } */

    if (error) {
        console.error(error, 'error');
    }
    return children({ doRegisterInvitation, loading, error, data });
};

RegisterUserByInvitationMutation.propTypes = {
    children: PropTypes.any,
};
