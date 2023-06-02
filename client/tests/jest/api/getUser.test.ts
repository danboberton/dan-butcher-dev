import {getUser} from "@/lib/database/getUser";

describe('Able to get a user',  ()=>{

    it('gets a user', async()=>{
        const user = await getUser('user')
        console.log(JSON.stringify(user))
        expect(user).toEqual('user')
    })
})