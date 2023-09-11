module.exports = function paginateUsersController({ paginateUsers, Joi }) {
    return async function paginateUsersControllerAction(req, res) {

        console.log("\n\npaginate-user-controller.js was called\n\n");

        // try {            
        const limit = parseInt(req.query.limit) || 1;
        const offset = parseInt(req.query.offset) || 0;

        const validationObj = isValid({ limit, offset });

        const data = await paginateUsers({ limit: validationObj.limit, offset: validationObj.offset });

        res.status(200).send(data);
        // } catch (error) {
        // res.status(404).send(error);
        // }

        // JOI VALIDATION FUNCTION
        function isValid({ limit, offset }) {

            console.log("\n\npaginate-user-controller.js joi validation function was called\n\n");

            const schemass = Joi.object({
                limit: Joi.number(),
                offset: Joi.number(),
            });

            const { value, error } = schemass.validate({ limit, offset });
            if (error) {
                const message = error.details[0].message;
                throw message;
            } else {
                return value;
            }
        }
    }
}