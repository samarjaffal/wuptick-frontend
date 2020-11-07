import { useQuery } from 'react-apollo';
import { gqlGetInvitationsForProject } from '../graphql/gqlGetInvitationsForProject';
import PropTypes from 'prop-types';

export const GetInvitationsForProjectQuery = ({ children, projectId }) => {
    const { error, loading, data } = useQuery(gqlGetInvitationsForProject, {
        variables: { projectId },
        onCompleted: (data) => {
            console.log(data, 'data GetProjectQuery');
        },
    });
    if (loading || !data) {
        return 'loading...';
    }

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

GetInvitationsForProjectQuery.propTypes = {
    children: PropTypes.any,
    projectId: PropTypes.string,
};
