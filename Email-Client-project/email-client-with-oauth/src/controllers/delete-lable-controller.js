module.exports = function deleteLableController({ deleteLable, Joi }) {
    return async function deleteLableControllerAction(req, res) {

        console.log("\n\n delete-lable-controller.js was called\n\n");

        try {

            isValid({ id: req.params.id });

            await deleteLable({ id: req.params.id });

            res.status(200).send("deleted");
        } catch (error) {
            res.status(404).send(error);
        }

        // JOI VALIDATION FUNCTION
        function isValid({ id }) {

            console.log("\n\n delete-lable-controller.js joi validation function was called\n\n");

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
