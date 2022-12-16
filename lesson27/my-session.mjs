
import crypto from 'crypto'

const SESSIONS = {
}


const SESSION_COOKIE = "_session_"
export default function() {
    return function(req, rsp, next) {
        let sessionId = req.cookies[SESSION_COOKIE]
        let session = getSession(sessionId)
        req.session = session.data
        rsp.cookie(SESSION_COOKIE, session.id)
        next()
    }


    function getSession(sessionId) {
        let session = SESSIONS[sessionId]
        if(session == undefined) {
            session = {
                id: crypto.randomUUID(),
                data: {}
            }
            SESSIONS[session.id] = session
        }
        return session
    }
}