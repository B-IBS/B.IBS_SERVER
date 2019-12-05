const { MongoClient: DataBase } = require('mongodb');

exports.client = undefined;
exports.database = undefined;
exports.adCharCollection = undefined;

exports.connect = async function connect(host, dbName) {
    exports.client = await DataBase.connect(host);
    exports.database = exports.client.db(dbName);
    exports.adCharCollection = exports.database.collection("adchar");
}
