import e from "cors";

function HttpResponse(status, body) {
    this.status = status
    this.body = body
}

export default function(error) {
    switch(e.code) {
        case 1: return new (400, e.description)
        default: return new (500, "Internal server error. Contact your teacher!")
    }
}

