import { gql } from "@apollo/client";

export const PERSON_DETAILS = gql`
  fragment PersonDetails on Repository {
    description
    forksCount
    fullName
    language
    stargazersCount
    ownerAvatarUrl
    ratingAverage
    reviewCount
    id
    url
  }
`;