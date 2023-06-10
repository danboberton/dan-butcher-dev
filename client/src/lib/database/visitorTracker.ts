import {useEffect} from "react";

const VISITOR_KEY = 'VISITOR'
function isNewVisitor(id: string): boolean{
    return true
}

function getVisitorID(): string | null{
    const cookieDough = decodeURIComponent(document.cookie).split(';')
    console.log(`type: ${typeof cookieDough} dough: ${JSON.stringify(cookieDough)}`)
    for(let i = 0; i < cookieDough.length; i++){
        const parseCookie = cookieDough[i].trimStart().split('=')
        if(parseCookie[0] === VISITOR_KEY) return parseCookie[1]
    }
    return null
}

function setNewVisitorID(): void {
    document.cookie=`${VISITOR_KEY}=1`
    console.log('cookie set')
}

function encryptCookie(input: string): string {

}

export function useVisitorTracker(): void {
    useEffect(()=>{
        const visitorID = getVisitorID()
        if (visitorID){
            // logToDB
        } else {
            setNewVisitorID()
        }

    }, [])
}