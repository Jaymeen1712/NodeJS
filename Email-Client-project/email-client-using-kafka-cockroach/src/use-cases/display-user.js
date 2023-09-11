module.exports = function FetchAllUserDataFunc({ read, getLable, Joi }) {

  return async function fetchAllUserData(id) {

    const valueofReaddb = await read({ id });
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4444,",valueofReaddb)

    console.log("get lable function", id);
    const valueOfGetLable = await getLable({ id });
    // console.log("data is here fetchallusersdata", valueOfGetLable);

    console.log("----",valueOfGetLable,"____________________")
    console.log(valueofReaddb.rows.length,"_____________________-");
    if (valueofReaddb.rows.length > 0 && valueOfGetLable.length > 0) {

      const user = {};
      const lables = `${valueOfGetLable[0].name}, ${valueOfGetLable[1].name}, ${valueOfGetLable[2].name}, ${valueOfGetLable[3].name}, ${valueOfGetLable[4].name}`
      user.user_name = valueofReaddb.rows[0].user_name;
      user.user_email = valueofReaddb.rows[0].user_email;
      user.photo = valueofReaddb.rows[0].photo;
      user.lables = lables

      return { user };
    } else {
      console.log("display user error:- ");
      throw "no user exist";
    }

  };
};
