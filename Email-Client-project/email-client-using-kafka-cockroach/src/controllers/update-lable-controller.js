module.exports = function updateLableController({ updateLable, Joi }) {
    return async function updateLableControllerAction(req, res) {
        try {
            const name = req.body.name;
            const id = req.params.id;

            isValid({ name, id });
            console.log("validation id in controller is here :- ", id);

            await updateLable({ name, id });

            res.status(200).send("updated");
        } catch (error) {
            console.log(error);
            res.status(404).send(error);
        }

        function isValid({ name, id }) {
            const schemass = Joi.object({
                name: Joi.string().min(3).required(),
                id: Joi.string().required(),
            });
            const { value, error } = schemass.validate({name, id});
            if (error) {
                throw (error.details[0].message);
            } else {
                return value;
            }
        }
    }
}
