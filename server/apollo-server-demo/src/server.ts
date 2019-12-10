import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {createServer} from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

import mongoose from 'mongoose';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


const url = 'mongodb://localhost:27017';

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


var kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);
var fluffy = new Kitten({name: 'fluffy'});

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
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
