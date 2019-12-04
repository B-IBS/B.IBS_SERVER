const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        me: String!
    }
    type Mutation {
        login(email: String!): String
    }
    # Your schema will go here
`;

module.exports = typeDefs;
