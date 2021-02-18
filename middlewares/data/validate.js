const {constants, msg} = require('../../config/constants');
const {isEmail, normalizeEmail} = require('validator');


module.exports = {
    user: {
        register(req, res, next) {
            let {email, password, repeatPassword} = req.body;

            let user = {
                errors: [],
            };

            if (!isEmail(email)) {
                user.errors.push(msg.EMAIL_IS_INVALID);
            } else {
                user.email = email;
            }

            if (password !== repeatPassword) {
                user.errors.push(msg.CONFIRMATION_PASSWORD_ERROR);
            }

            if (!constants.PASSWORD_REGEX.test(password)) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH_ALPHABETICAL);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/register', {...user, message: user.errors.shift()});

        },
        login(req, res, next) {
            let {email, password} = req.body;

            let user = {
                errors: [],
            };

            email = normalizeEmail(email);
            if (!isEmail(email)) {
                user.errors.push(msg.EMAIL_IS_INVALID);
            } else {
                user.email = email;
            }

            if (!constants.PASSWORD_REGEX.test(password)) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH_ALPHABETICAL);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/login', {...user, message: user.errors.shift()})
        },
    }
}