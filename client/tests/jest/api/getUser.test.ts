import {getUser} from "@/lib/database/getUser";

describe('Able to get a user',  ()=>{

    it('gets a user', async()=>{
        const user = await getUser('fakepassword')
        console.log(JSON.stringify(user))
        expect(user.user).toEqual('fakepassword')
    })
})