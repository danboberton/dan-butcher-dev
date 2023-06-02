import {MongoClient, ServerApiVersion} from 'mongodb'
import {getConnectionString} from "../../../src/lib/database/database.config";

describe('Able to connect to Database', () => {
    it('is able to ping the database', () => {
        const user = process.env.DB_USER
        const pass = process.env.DB_PASS
        const db = process.env.WORD_DB
        const uri = getConnectionString(user, pass)

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        const ping = async()=> {
            try {
                // Connect the client to the server	(optional starting in v4.7)
                await client.connect();
                // Send a ping to confirm a successful connection
                await client.db(db).command({ping: 1});
            } catch {
                throw new Error()
            } finally {
                // Ensures that the client will close when you finish/error
                await client.close();
            }
        }

        expect(ping).not.toThrow()
    })
})