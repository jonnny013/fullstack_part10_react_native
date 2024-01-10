import { gql } from '@apollo/client';
import { PERSON_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...PersonDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${PERSON_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repositories($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...PersonDetails
      reviews (first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${PERSON_DETAILS}
`;

export const GET_CLIENT = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            rating
            text
            createdAt
            id
            repository {
              fullName
              id
            }
          }
        }
      }
    }
  }
`;