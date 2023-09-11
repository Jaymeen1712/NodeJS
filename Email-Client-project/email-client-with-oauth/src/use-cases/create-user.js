module.exports = function creatUserFunc({ create, createLable, Joi, producer, makeUserTemplate }) {
  return async function createUser(value) {

    console.log("\n\ncreate-user.js  --usecase--  was called\n\n")

    let validData = isValid(value);

    const userName = validData.userName;
    const userEmail = validData.userEmail;
    const accessToken = validData.accessToken;
    const refreshToken = validData.refreshToken;
    const photo = validData.photo;
    const expiresIn = validData.expiresIn

    const ans = makeUserTemplate({ userName, userEmail, accessToken, refreshToken, photo, expiresIn });

    const entitiesValue = {
      userName: ans.getUserName(),
      userEmail: ans.getUserEmail(),
      accessToken: ans.getAccessToken(),
      refreshToken: ans.getRefreshToken(),
      photo: ans.getPhoto(),
      expiresIn: ans.getExpiresIn()
    }

    const valueOfCreateData = await create(entitiesValue);

    await producer.connect()
    await producer.send({
      topic: 'add-user-lable',
      messages: [
        {
          value: JSON.stringify({
            id: valueOfCreateData[1],
            userName: entitiesValue.userName,
            userEmail: entitiesValue.userEmail,
            accessToken: entitiesValue.accessToken,
            refreshToken: entitiesValue.refreshToken,
            photo: entitiesValue.photo,
            expiresIn: entitiesValue.expiresIn
          })
        },
      ],
    })
    producer.disconnect();

    if (valueOfCreateData[0] > 0) {
      let val = ["IMPORTANT", "INBOX", "STARRED", "SENT", "TRASH"];
      const valPriority = [1, 2, 3, 4, 5];
      for (let i = 0; i < val.length; i++) {
        const name = val[i];
        const syncedFolder_id = val[i];
        const priority = valPriority[i];
        await createLable(valueOfCreateData[1], name, syncedFolder_id, priority);
      }
      return valueOfCreateData;
    } else {
      throw "user already exist";
    }
  };

  // JOI VALIDATION FUNCTION
  function isValid(data) {

    console.log("\n\n create-user.js --usecase-- joi validation function was called");

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
      expiresIn: Joi.number().required()
    });

    const { value, error } = schemass.validate(data);
    if (error) {
      const message = error.details[0].message;
      throw message
    } else {
      return value
    }
  }
};
