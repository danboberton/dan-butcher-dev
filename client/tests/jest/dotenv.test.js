describe('Make sure environmental variables are loaded', ()=>{
    it('loads DB_Pass', ()=>{
        expect(process.env.DB_PASS).toBeDefined()
    })
})