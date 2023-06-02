import {MongoClient, ServerApiVersion} from 'mongodb'

describe('Able to connect to Database', () => {
    it('is able to ping the database', () => {
        const user = process.env.DB_USER
        const pass = process.env.DB_PASS
        const db = process.env.WORD_DB
        const uri = `mongodb+srv://${user}:${pass}@cluster0.mglvzsy.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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