import {withDatabaseConnection} from "@/lib/database/withDatabaseConnection";

export async function getUser(user: string){
    // @ts-ignore
    return await withDatabaseConnection((connection)=>{
        const query = { user: user };
        return connection.findOne(query)
    }, process.env.WORD_DB as string, 'db-dev-word')
}