const globals = {
    constants: {
        PASSWORD_MIN_LENGTH: 5,
        PASSWORD_REGEX: /^[A-Za-z0-9]{5,}$/,
    },
    msg: {
        CONFIRMATION_PASSWORD_ERROR: "Both passwords should be the same ...",
        PASSWORD_MIN_LENGTH_ALPHABETICAL: "Password must be at least 5 characters of digits and/or latin letters",
        WRONG_CREDENTIALS: "Wrong email or password",
        EMAIL_IS_INVALID: "Email must be valid",
        EMAIL_IS_IN_USE: (email) => {
            return `Email ${email} is already taken ...`
        },
        DB_CONNECTED: (host, name) => {
            return `Successfully connected to ${host} : db -> ${name}`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        },
    }
}

module.exports = globals;