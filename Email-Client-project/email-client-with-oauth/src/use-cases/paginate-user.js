module.exports = function paginateUsersFunction({ paginateUsersdb, getLable, Joi }) {
    return async function paginateUsers({ limit, offset }) {

        console.log("\n\n paginate-usee.js --usecase-- was called\n\n");

        const validationObj = isValid({ limit, offset });


        const data = await paginateUsersdb({ limit: validationObj.limit, offset: validationObj.offset, })

        const users = data.rows;

        let ans = []

        for (let i = 0; i < users.length; i++) {
            const id = users[i].id;
            let result = await getLable({ id })
            users[i].labels = result.map(data => data.name)

            ans.push({ user: users[i] })
        }

        return ans
    }

    // JOI VALIDATION FUNCTION
    function isValid({ limit, offset }) {

        console.log("\n\n paginate-user.js --usecase-- joi validation function was called\n\n")
        
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