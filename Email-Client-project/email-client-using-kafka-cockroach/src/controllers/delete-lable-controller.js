module.exports = function deleteLableController({ deleteLable, Joi }) {
    return async function deleteLableControllerAction(req, res) {

        try {

            isValid({ id: req.params.id });

            await deleteLable({ id: req.params.id });

            res.status(200).send("deleted");
        } catch (error) {
            console.log(":::::::::::::::::::controller error");
            res.status(404).send(error);
        }

        function isValid({ id }) {
            console.log("idddddddddddddddddddid", id);
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
