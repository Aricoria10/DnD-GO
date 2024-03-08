import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter(
    $characterName: String!
    $characterGender: String!
    $characterRace: String!
    $characterClass: String!
    $characterLevel: Int!
    $characterExperience: Int!
  ) {
    addCharacter(
      characterName: $characterName
      characterGender: $characterGender
      characterRace: $characterRace
      characterClass: $characterClass
      characterLevel: $characterLevel
      characterExperience: $characterExperience
    ) {
      _id
      characterAuthor
      characterClass
      characterExperience
      characterGender
      characterLevel
      characterName
      characterRace
    }
  }
`;
