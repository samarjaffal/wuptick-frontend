import gql from 'graphql-tag';

export const gqlDeleteTeam = gql`
    mutation deleteTeam($teamId: ID!) {
        deleteTeam(teamId: $teamId)
    }
`;
