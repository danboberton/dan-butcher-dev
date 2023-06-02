import {MongoClient, ServerApiVersion} from 'mongodb'

describe('Mongo Database tests', () => {
    it('can ping the database', async () => {
            // const pass = process.env.DB_PASS
            // const user = process.env.DB_USER
            // const uri = `mongodb+srv://${user}:${pass}@cluster0.mglvzsy.mongodb.net/?retryWrites=true&w=majority`
            //
            // const client = new MongoClient(uri, {
            //     serverApi: {
            //         version: ServerApiVersion.v1,
            //         strict: true,
            //         deprecationErrors: true,
            //     }
            // });
            //
            // const ping = async () => {
            //     try {
            //         // Connect the client to the server	(optional starting in v4.7)
            //         await client.connect();
            //         // Send a ping to confirm a successful connection
            //         await client.db(user).command({ping: 1});
            //     } catch (err) {
            //         throw(new Error())
            //     } finally {
            //         // Ensures that the client will close when you finish/error
            //         await client.close();
            //     }
            // }
            // expect(await ping()).not.toThrow()
        }
    )
})