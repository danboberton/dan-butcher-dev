import {withDatabaseConnection} from "@/lib/database/withDatabaseConnection";

describe('withDatabaseConnection performs resiliently', () => {

    afterEach(() => {
        jest.resetModules()
    })

    it('throws when missing environmental variables for database access', async () => {
        const originalUser = process.env.DB_USER
        const originalPass = process.env.DB_PASS
        process.env.DB_USER = ""
        process.env.DB_PASS = ""
        await expect(withDatabaseConnection((connection) => {}, "", ""))
            .rejects.toThrow("Missing environmental variable for database User or Password")

        // Reset variables
        process.env.DB_USER = originalUser
        process.env.DB_PASS = originalPass
    })

    it('resets environmental variables', async () => {
        await expect(withDatabaseConnection((connection) => {}, "", ""))
            .rejects.not.toThrow("Missing environmental variable for database User or Password")
    })

})