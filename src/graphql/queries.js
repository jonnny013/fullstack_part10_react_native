import { gql } from '@apollo/client';
import { PERSON_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...PersonDetails
        }
      }
    }
  }
  ${PERSON_DETAILS}
`;

export const GET_CLIENT = gql`
query {
  me {
    username
    id
  }
}
`