import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { SkeletonCardItem } from '../components/Loaders/SkeletonCardItem/index';
const testQuery = gql`
    query Test {
        testUser
    }
`;

export const TestPage = () => {
    const { error, loading, data } = useQuery(
        testQuery /* {
        fetchPolicy: 'network-only',
    } */
    );

    if (error) {
        console.log(error);
        return <h1>Error</h1>;
    }

    if (loading) {
        return <div>loading...</div>;
    }

    return (
        <div style={{ paddingTop: '48px' }}>
            <h1>Test Page!! {data.testUser}</h1>
            <SkeletonCardItem />
        </div>
    );
};
