module.exports = function FetchAllUserDataFunc({ read, getLable, Joi }) {

  return async function fetchAllUserData(id) {

    console.log("\n\n display-user.js --usecase-- was called");

    const valueofReaddb = await read({ id });

    const valueOfGetLable = await getLable({ id });

    if (valueofReaddb.rows.length > 0 && valueOfGetLable.length > 0) {

      const user = {};
      const lables = `${valueOfGetLable[0].name}, ${valueOfGetLable[1].name}, ${valueOfGetLable[2].name}, ${valueOfGetLable[3].name}, ${valueOfGetLable[4].name}`
      user.id = valueofReaddb.rows[0].id;
      user.user_name = valueofReaddb.rows[0].user_name;
      user.user_email = valueofReaddb.rows[0].user_email;
      user.access_token = valueofReaddb.rows[0].access_token;
      user.refresh_token = valueofReaddb.rows[0].refresh_token;
      user.photo = valueofReaddb.rows[0].photo;
      user.lables = lables

      return { user };
    } else {
      throw "no user exist";
    }

  };
};
