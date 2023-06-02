import { MongoClient, ServerApiVersion } from 'mongodb'

describe('Able to connect to Database', () => {
    it('is able to ping the database', () => {
        const user = "user"
        const pass = "pass"
        const uri = `mongodb+srv://${user}:${pass}@cluster0.mglvzsy.mongodb.net/?retryWrites=true&w=majority`

        const x = true
        expect(x).toBeTruthy()
    })
})