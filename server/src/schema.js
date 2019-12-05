const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        me: User!
    }
    
    type Mutation {
        login(email: String!): String!
    }
    
    type User {
        name: String!
        password: String!
        data: Int!
    }
    # Your schema will go here
`;

module.exports = typeDefs;
