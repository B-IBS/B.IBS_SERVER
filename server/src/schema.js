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

    type WidgetResponse implements QueryResponse {
        code: String!
        success: Boolean!
        message: String!
        data: [Widget]!
    }

    type Widget {
        name: String!
        description: String!
        tags: [String!]!
    }
    
    type User {
        name: String!
        password: String!
        data: Int!
    }
    
    type Query {
        me: User!
        foodMap(token: String!): FoodmapResponse!
        widget(token: String!): WidgetResponse!
    }

    type Mutation {
        login(email: String!): String!
    }
    # Your schema will go here
`;

module.exports = typeDefs;
