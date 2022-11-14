// Define all possible application errors

export default {
    INVALID_ARGUMENT: argName => {
            return {
            code: 1,
            description: `Invalid argument ${argName}`
        }
    },
    USER_NOT_FOUND: () => { 
        return {
            errorCode: 2,
            description: "User not found"
        }
    },
}