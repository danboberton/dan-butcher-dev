import {Collection, MongoClient, ServerApiVersion} from "mongodb"
import {getConnectionString} from "./database.config"
import {dbResponseParams} from "@/pages/api/dbResponse";

type Callback = <T extends dbResponseParams>(t: Collection<Document>) => T;

export async function withDatabaseConnection<T extends dbResponse>(callback: Callback, database: string, collection: string): Promise<T> {

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
