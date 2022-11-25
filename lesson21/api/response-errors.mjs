
function HttpErrorResponse(status, message, description) {
    this.status = status
    this.body = {
        message: message,
        description: description
    }
}

const HTTP_STATUS_CODES = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

export default function(e) {
    switch(e.code) {
        case 1: return new HttpErrorResponse(HTTP_STATUS_CODES.BAD_REQUEST, e.message, e.description)
        case 2: return new HttpErrorResponse(HTTP_STATUS_CODES.UNAUTHORIZED, e.message, e.description)
        case 3: return new HttpErrorResponse(HTTP_STATUS_CODES.NOT_FOUND, e.message, e.description)
        default: return new HttpErrorResponse(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, "Internal error. Contact you teacher!")
    }
}