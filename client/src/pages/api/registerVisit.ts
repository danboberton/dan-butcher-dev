import type {NextApiRequest, NextApiResponse} from 'next'
import {withDatabaseConnection} from "@/lib/database/withDatabaseConnection";
import {dbResponseParams} from "@/pages/api/dbResponse";

interface RegisterVisitData extends dbResponseParams {
    isNewID: boolean,
    visitorID: string
}

export default function handleRegisterVisit(
    req: NextApiRequest,
    res: NextApiResponse<RegisterVisitData>
) {
    const request = req.body
    console.log(`Request: ${JSON.stringify(request)}`)
    withDatabaseConnection(async (connection) => {
            const query = {'_id_': request.visitorID}
            const dbResult = await connection.findOne(query)
            console.log(`dbResult: ${JSON.stringify(dbResult)}`)
        },
        'db-dev', 'visitor-tracking')
        .then((data) => {
            console.log(`dbResult: ${JSON.stringify(data)}`)
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(`error reading from database ${err.stack}`)
            res.status(400).json({
                success: false,
                isNewID: false,
                visitorID: 0
            })
        })
}