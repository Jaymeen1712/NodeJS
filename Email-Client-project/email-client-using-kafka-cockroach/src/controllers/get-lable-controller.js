module.exports = function getLableController({ getLable, Joi }) {
    return async function getLableControllerAction(req, res) {
        try {
            const validation = isValid({ id: req.params.id });

            const getLableInfo = await getLable({ id: validation.id });

            if (getLableInfo.length == 0) {
                res.status(404).send("not found");
            }
            else {
                const lable = {};
                lable.lables = [`${getLableInfo[0].name}, ${getLableInfo[1].name}, ${getLableInfo[2].name}, ${getLableInfo[3].name}, ${getLableInfo[4].name}`];
                res.status(200).send(lable);
            }
        } catch (error) {
            let temp = error;
            res.status(404).send(temp);
        }

        function isValid({ id }) {
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
