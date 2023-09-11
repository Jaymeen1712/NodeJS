module.exports = function paginateUsersFunction({ paginateUsersdb, getLable, Joi }) {
    return async function paginateUsers({ limit, offset }) {
        const validationObj = isValid({ limit, offset });


        const data = await paginateUsersdb({ limit: validationObj.limit, offset: validationObj.offset, })

        // console.log("data is here:-------", data.rows);
        const users = data.rows;
        console.log("#########################################", users)
        // const users = [data.rows[0]];
        // console.log("paginateUsers  value is here :-----------------", users.rows);

        let ans = []

        for (let i = 0; i < users.length; i++) {
            console.log("id in loop:____________________", users[i].id)
            const id = users[i].id;
            let result = await getLable({ id })
            console.log("gatelable user in usecase :---------------", result);
            users[i].labels = result.map(data => data.name)

            ans.push({ user: users[i] })
        }

        return ans
    }

    function isValid({ limit, offset }) {
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