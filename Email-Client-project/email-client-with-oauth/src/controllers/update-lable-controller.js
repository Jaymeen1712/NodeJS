module.exports = function updateLableController({ updateLable, Joi }) {
    return async function updateLableControllerAction(req, res) {
        try {

            console.log("\n\nupdate-lable-controller.js was called\n\n");

            const name = req.body.name;
            const id = req.params.id;

            isValid({ name, id });

            await updateLable({ name, id });

            res.status(200).send("updated");
        } catch (error) {
            res.status(404).send(error);
        }


        // JOI VALIDATION FUNCTION
        function isValid({ name, id }) {

            console.log("\n\nupdate-lable-controller.js joi validation function was called\n\n");

            const schemass = Joi.object({
                name: Joi.string().min(3).required(),
                id: Joi.string().required(),
            });
            const { value, error } = schemass.validate({ name, id });
            if (error) {
                throw (error.details[0].message);
            } else {
                return value;
            }
        }
    }
}
