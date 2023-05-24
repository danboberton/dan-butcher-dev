import { useRouter } from 'next/router';
import Home from "@/pages";

export default function Page() {
    const router = useRouter();
    return <Home spec={router.query.spec as string}/>;
}