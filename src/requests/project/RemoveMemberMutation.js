import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { gqlRemoveMember } from '../graphql/gqlRemoveMember';
import { gqlGetProject } from '../graphql/gqlGetProject';
import { gqlGetUser } from '../graphql/gqlGetUser';
import { Notification } from '../../shared/Notification';
import PropTypes from 'prop-types';

export const RemoveMemberMutation = ({ children, modalRef }) => {
    const { addNotification, customTypes, customTitles } = Notification();
    const [removeMember, { error, loading, data }] = useMutation(
        gqlRemoveMember,
        {
            onCompleted: (data) => {
                console.log('RemoveMemberMutation', data);
                addNotification(
                    customTitles.success,
                    'Removed Member Successfuly ✅',
                    customTypes.success
                );
            },
        }
    );

    const doRemoveMember = useCallback((projectId, userId) => {
        removeMember({
            variables: {
                projectId,
                userId,
            },
            refetchQueries: [
                {
                    query: gqlGetProject,
                    variables: { projectId },
                },
                {
                    query: gqlGetUser,
                    variables: {
                        userId,
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
    return children({ doRemoveMember, loading, error, data });
};

RemoveMemberMutation.propTypes = {
    children: PropTypes.any,
};
