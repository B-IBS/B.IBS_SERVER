const {ApolloServer, gql} = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
let mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    user: "valentin",
    pass: "admin",
}).then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log("DBConnection Error: " + err.message);
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


// EXEMPLE
var kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};

var Kitten = mongoose.model('Kitten', kittySchema);
var fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: context => ({db})
});


// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
