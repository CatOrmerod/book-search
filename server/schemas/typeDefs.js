const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID
      username: String
      email: String
      password: String
      bookCount: Int
      savedBooks: [Book]!
  }
  type Book {
      authors: String
      description: String
      bookId: String
      image: String
      title: String
      link: String
  }
  type Auth {
      token: ID!
      user: User
  }
  type Query {
      users: [User]
      user(username: String!): User
      book(bookId: ID!): Book
      me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
        authors: String
        description: String
        bookId: String
        image: String
        title: String
        link: String
        ): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;