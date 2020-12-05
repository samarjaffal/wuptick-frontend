import gql from 'graphql-tag';

export const gqlEditTeam = gql`
    mutation editTeam($teamId: ID!, $input: EditTeamInput!) {
        editTeam(teamId: $teamId, input: $input) {
            name
        }
    }
`;
