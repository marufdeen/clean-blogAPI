const Joi = require('joi');

const validators = {}

validators.validateUserSignUp = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).email().required(),
        password: Joi.string().min(3).max(225).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    })

    return schema.validate(user)
}

validators.validateUserLogin = (user) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).email().required(),
        password: Joi.string().min(3).max(225).required(),
    })

    return schema.validate(user)
}

module.exports = validators;