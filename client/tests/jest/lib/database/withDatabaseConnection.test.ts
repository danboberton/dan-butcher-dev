

describe('withDatabaseConnection performs resiliently', ()=>{

    it('throws when missing environmental variables for database access', ()=>{
        jest.mock('process')
        process.env.DB_USER.mockResolvedValue(undefined)
        process.env.DB_PASS.mockResolvedValue(undefined)
        expect(withDatabaseConnection((connection)=>{}), "", "").toThrow()
    })

})