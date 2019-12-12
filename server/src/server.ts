import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {createServer} from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

import mongoose from 'mongoose';
import User from "./models/user.model";

const url = 'mongodb://localhost:27017';

let a = 10;

mongoose.connect(url, {
    useNewUrlParser: true,
    user: "valentin",
    pass: "admin",
});
mongoose.connection.once('open', () => {
    console.info('Connected to Mongo via Mongoose');
});
mongoose.connection.on('error', (err) => {
    console.error('Unable to connect to Mongo via Mongoose', err);
});


// A ENLEVER

User.remove({}, function(err) {
    console.log('collection removed')
});

const app = express();

const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});
app.use('*', cors());

app.use(compression());

server.applyMiddleware({app, path: '/graphql'});
const httpServer = createServer(app);
httpServer.listen(
    {port: 3000},
    (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`));
