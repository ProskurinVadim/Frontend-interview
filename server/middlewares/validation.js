const validation = (schema) => {
    const func = (req, res, next) => {
        console.log(req)
        const { error } = schema.validate(req.body);
        if (error) {
            error.status = 400;
            return next(error);
        }
        next();
    }

    return func;
}

module.exports = validation;