import { gql } from '@apollo/client';
import { PERSON_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...PersonDetails
        }
      }
    }
  }
  ${PERSON_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repositories($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...PersonDetails
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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