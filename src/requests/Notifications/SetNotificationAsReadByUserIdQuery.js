import { useQuery } from 'react-apollo';
import { gqlSetNotificationAsReadByUserId } from '../graphql/gqlSetNotificationAsReadByUserId';
import { useUser } from '../../hooks/useUser';
import PropTypes from 'prop-types';

export const SetNotificationAsReadByUserIdQuery = ({
    children,
    externalId,
}) => {
    const { currentUser } = useUser();
    const { error, loading, data } = useQuery(
        gqlSetNotificationAsReadByUserId,
        {
            variables: { externalId, recipient: currentUser._id },
            onCompleted: (data) => {
                console.log('SetNotificationAsReadByUserIdQuery', data);
            },
        }
    );

    if (error) {
        console.log(error, 'error');
    }
    return children({ loading, error, data });
};

SetNotificationAsReadByUserIdQuery.propTypes = {
    children: PropTypes.any,
    externalId: PropTypes.string,
};
