import { MongoClient, ServerApiVersion } from 'mongodb');

describe('Mongo Database tests', () => {
    it('can ping the database', () = > {
        const pass = process.env.DB_PASS
        const user = process.env.DB_USER
        const uri = `mongodb+srv://${user}:${pass}@cluster0.mglvzsy.mongodb.net/?retryWrites=true&w=majority`
    }
)
})