import {Collection, MongoClient, ServerApiVersion} from "mongodb"
import {getConnectionString} from "./database.config"
import {dbResponseParams} from "@/pages/api/dbResponse";

type Callback = <T extends dbResponseParams>(t: Collection<Document>) => T;

interface withDatabaseConnectionParams<T> {
    callback: Callback
    readonly database: string
    readonly collection: string
}

export async function withDatabaseConnection<T extends dbResponse>
                        ({callback, database, collection}: withDatabaseConnectionParams): Promise<T> {
    const user: string | undefined = process.env.DB_USER
    const pass: string | undefined = process.env.DB_PASS
    if(!user || !pass){
        throw new Error("Missing environmental variable for database User or Password")
    }
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
