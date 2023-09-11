module.exports = function createUserController({ createUser, Joi, Kafka }) {
  return async function createUserControllerAction(req, res) {
    try {
      const validation = isValid(req.body);
      console.log("controller called :- ", validation);
      const userInfo = await createUser(validation.value);
      console.log("hiiiiiiiiiiiiiiiiiiiiiii", userInfo)
      // const userId =;
      res.status(201).send("created");
      // console.log("&&&&&&&&&&&&&&",userInfo.userId);
      kafkaLable( userInfo )
    } catch (error) {
      console.log(error,"--------");
      res.status(404).send(error);
    }
  };

  async function kafkaLable( id ) {
    const kafka = new Kafka({
      clientId: 'add lables',
      brokers: ['localhost:9092'],
    })

    const producer = kafka.producer();

    // async function run() {
      await producer.connect()
      console.log("**************",id);
      await producer.send({
        topic: 'add-user-lable',
        messages: [
          { value: id },
        ],
      })
      producer.disconnect();
    // }
    // run().catch(console.log("[[[[[[[[[[[[[[[[[", error));
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
    const { error } = schemass.validate(data);
    if (error) {
      console.log("errrororororo")
      throw (error.details[0].message);
    } else {
      return schemass.validate(data);
    }
  }
};