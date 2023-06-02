const {MongoClient, ServerApiVersion} = require("mongodb");
const {getConnectionString} = require("./database.config");


export async function withDatabaseConnection(callback: Function, database: string, collection: string) {

    const user = process.env.DB_USER
    const pass = process.env.DB_PASS
    const uri = getConnectionString(user, pass)
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        const databaseMongo = client.db(database);
        const collectionMongo = databaseMongo.collection(collection);
        return await callback(collectionMongo)
    } catch (err) {
        throw err
    } finally {
        await client.close();
    }
}
