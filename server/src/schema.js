const { gql } = require('apollo-server');

const typeDefs = gql`
    interface QueryResponse {
        code: String!
        success: Boolean!
        message: String!
    }
    
    type FoodmapResponse implements QueryResponse {
        code: String!
        success: Boolean!
        message: String!
        data: [Foodmap]!
    }
    
    type Foodmap {
        aliment: String!
        trigger: Int!
    }
    
    type User {
        name: String!
        password: String!
        data: Int!
    }
    
    type Query {
        me: User!
        foodMap(token: String!): FoodmapResponse!
    }

    type Mutation {
        login(email: String!): String!
    }
    # Your schema will go here
`;

module.exports = typeDefs;
