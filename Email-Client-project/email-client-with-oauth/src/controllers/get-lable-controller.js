module.exports = function getLableController({ getLable, Joi }) {
    return async function getLableControllerAction(req, res) {
        try {

            console.log("\n\nget-lable-controller.js was called\n\n");

            const validation = isValid({ id: req.params.id });

            const getLableInfo = await getLable({ id: validation.id });

            if (getLableInfo.length == 0) {
                res.status(404).send("not found");
            }
            else {
                res.status(200).send({ lable: getLableInfo });
            }
        } catch (error) {
            let temp = error;
            res.status(404).send(temp);
        }

        // JOI VALIDATION FUNCTION
        function isValid({ id }) {

            console.log("\n\nget-lable-controller.js joi validation function was called\n\n");

            const schemas = Joi.object({
                id: Joi.string().required(),
            });
            const { value, error } = schemas.validate({ id });
            if (error) {
                const message = error.details[0].message;
                throw message
            } else {
                return value
            }
        }
    }
}
