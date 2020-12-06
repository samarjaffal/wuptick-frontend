import gql from 'graphql-tag';

export const gqlCreateTeam = gql`
    mutation createTeam($input: TeamInput!) {
        createTeam(input: $input) {
            _id
            name
        }
    }
`;
