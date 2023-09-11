module.exports = function creatUserFunc({ create, createLable, Joi, makeUserTemplate }) {
  return async function createUser(value) {

    // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77", value);
    let validData = isValid(value);
    // console.log("((((((((((((((((((((((((9", validData);

    const userName = validData.userName;
    const userEmail = validData.userEmail;
    const accessToken = validData.accessToken;
    const refreshToken = validData.refreshToken;
    const photo = validData.photo;
    
    const ans = makeUserTemplate({ userName, userEmail, accessToken, refreshToken, photo });
    // console.log("(((((((((((((((((((())))))))))))))))))))))000000000000", ans);
    // console.log("-------------------------------********************s",validData);
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%", ans.getUserName());
    const entitiesValue = {
      userName: ans.getUserName(),
      userEmail: ans.getUserEmail(),
      accessToken: ans.getAccessToken(),
      refreshToken: ans.getRefreshToken(),
      photo: ans.getPhoto()
    }

    // console.log("@@@@@@@@@@@@@@@@2222", entitiesValue);

    const valueOfCreateData = await create(entitiesValue);

    console.log("valueOfCreateData[0]", valueOfCreateData[0], valueOfCreateData[1]);
    if (valueOfCreateData[0] > 0) {

      // let val = ["INBOX", "SEND", "STAR", "BIN", "DELETE"];
      // for (let i = 0; i < val.length; i++) {
      //     const name = val[i];
      //     // console.log("")
      //   await createLable(valueOfCreateData[1], name);
      // }
      return valueOfCreateData[1];
    } else {
      throw "user already exist";
    }

    function isValid(data) {
      const schemass = Joi.object({
        userName: Joi.string().min(3).required(),
        userEmail: Joi.string()
          .required()
          .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
          }),
        accessToken: Joi.string().min(3).required(),
        refreshToken: Joi.string().min(3).required(),
        photo: Joi.string().required(),
      });

      const { value, error } = schemass.validate(data);
      if (error) {
        console.log("errrrrereree");
        const message = error.details[0].message;
        throw message
      } else {
        return value
      }
    }
  };
};
