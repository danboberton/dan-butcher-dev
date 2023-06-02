export const getConnectionString = (user: string, password: string)=>{
    return `mongodb+srv://${user}:${password}@cluster0.mglvzsy.mongodb.net/?retryWrites=true&w=majority`
}