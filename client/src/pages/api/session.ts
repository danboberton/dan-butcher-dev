import { withSessionRoute } from "@/components/Auth/withSession";
import { NextApiRequest, NextApiResponse } from 'next'
import type {User} from './user'

const VALID_EMAIL = "test@gmail.com";
const VALID_PASSWORD = "password";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            req.session.user = {
                username: "test@gmail.com",
                isAdmin: true
            } as User
            await req.session.save();
            res.send({ ok: true });
        }
        return res.status(403).send("");
    }
    return res.status(404).send("");
}