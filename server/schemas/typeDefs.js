const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]
  }

  type Character {
    _id: ID
    characterAuthor: String
    characterName: String
    characterGender: String
    characterRace: String
    characterClass: String
    characterLevel: Int
    characterExperience: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    characters: Character
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(characterName: String!, characterGender: String!, characterRace: String!, characterClass: String!, characterLevel: Int!, characterExperience: Int!): Character
  }
`;

module.exports = typeDefs;
