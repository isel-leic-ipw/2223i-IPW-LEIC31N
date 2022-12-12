

export default {
    INVALID_PARAMETER: (argName, description) => {
        return {
            code: 1,
            message: `Invalid argument ${argName}`,
            description: description
        }
    },
    USER_NOT_FOUND: () => {
        return {
            code: 2,
            message: `User not found`
        }
    },
    TASK_NOT_FOUND: (idTask) => {
        return {
            code: 3,
            message: `Task with id ${idTask} not found`
        }
    }

}