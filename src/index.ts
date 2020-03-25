import {GraphQLServer} from 'graphql-yoga'
import resolvers from './resolvers'
import {prisma} from './generated/prisma-client'

const SCHEMA_PATH = (process.env.SCHEMA_PATH ? process.env.SCHEMA_PATH : './src/schema.graphql');

const server = new GraphQLServer({
    typeDefs: SCHEMA_PATH,
    resolvers,
    context: request => ({
        ...request,
        prisma,
    }),
});

const PORT = (process.env.PORT ? process.env.PORT : 4000);

const options = {
    port: PORT,
};

server.start(options, async ({port}) => {
        console.log(`Server is running on http://localhost:${port}`);
    }
);