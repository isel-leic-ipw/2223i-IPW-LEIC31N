
import crypto from 'crypto'

const SESSIONS = {

}


const SESSION_COOKIE = "_session_"
export default function() {
    return function(req, rsp, next) {
        let sessionId = req.cookies[SESSION_COOKIE]
        let session = getSession(sessionId)
        req.session = session.obj

        rsp.cookie(SESSION_COOKIE, session.id)

        next()
    }

    function getSession(sessionId) { 
        let session = SESSIONS[sessionId]
        if(session == undefined) {
            sessionId = crypto.randomUUID()
            SESSIONS[sessionId] = {
                id: sessionId,
                obj: { }
            }
        }
        return SESSIONS[sessionId]
    }
}