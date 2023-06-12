import {useEffect} from "react";

const VISITOR_KEY = 'VISITOR'

function isNewVisitor(id: string): boolean {
    return true
}

import {withDatabaseConnection} from "@/lib/database/withDatabaseConnection";


function getVisitorIDfromCookie(): string | null {
    const cookieDough = decodeURIComponent(document.cookie).split(';')
    console.log(`type: ${typeof cookieDough} dough: ${JSON.stringify(cookieDough)}`)
    for (let i = 0; i < cookieDough.length; i++) {
        const parseCookie = cookieDough[i].trimStart().split('=')
        if (parseCookie[0] === VISITOR_KEY) return parseCookie[1]
    }
    return null
}

function setNewVisitorID(): void {
    document.cookie = `${VISITOR_KEY}=1`
    console.log('cookie set')
}

function encryptCookie(input: string): string {

}

export function useVisitorTracker(): void {
    useEffect(() => {
        const visitorID = getVisitorIDfromCookie()
        console.log(`visitorID: ${JSON.stringify(visitorID)}`)
        if (visitorID) {
            const config = {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                // mode: "no-cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({visitorID: visitorID})
            }
            fetch('/api/registerVisit', config)
                .then((res)=>res.json())
                .then((data) => console.log(`Response: ${JSON.stringify(data)}`))
                .catch((err) => console.log(`Error in registerVisit fetch ${err.stack}`))
        }

        return () => {
        }
    }, [])
}