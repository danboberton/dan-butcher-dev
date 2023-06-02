describe('Make sure environmental variables are loaded', ()=>{
    it('loads DB_PASS', ()=>{
        expect(process.env.DB_PASS).toBeDefined()
    })

    it('loads DB_USER', ()=>{
        expect(process.env.DB_USER).toBeDefined()
    })

    it('loads WORD_DB', ()=>{
        expect(process.env.WORD_DB).toBeDefined()
    })
})