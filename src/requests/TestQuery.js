import { useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

const testQuery = gql`
    {
        testUser
    }
`;
export const TestQuery = ({ children }) => {
    const [test, { error, loading, data }] = useLazyQuery(testQuery);
    return children({ test, data, loading, error });
};

TestQuery.propTypes = {
    children: PropTypes.any,
};
