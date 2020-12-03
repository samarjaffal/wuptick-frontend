import gql from 'graphql-tag';

export const gqlRemoveMemberFromTeam = gql`
    mutation removeMemberFromTeam($teamId: ID!, $userId: ID!) {
        removeMemberFromTeam(teamId: $teamId, userId: $userId)
    }
`;
