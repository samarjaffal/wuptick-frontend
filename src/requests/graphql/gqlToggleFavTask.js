import gql from 'graphql-tag';

export const gqlToggleFavTask = gql`
    mutation toggleFavTask($state: Boolean!, $taskId: ID!) {
        toggleFavTask(state: $state, taskId: $taskId)
    }
`;
