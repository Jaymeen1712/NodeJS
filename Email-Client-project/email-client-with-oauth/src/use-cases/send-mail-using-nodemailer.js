module.exports = function createSendMailUsingNodemailer({ nodemailer, Joi, dataAccessUserFunction }) {
  return async function sendMailUsingNodemailer({
    from,
    to,
    subject,
    cc,
    bcc,
    replyTo,
    inReplyTo,
    text,
    html,
    attachments,
    refrences,
  }) {
    // console.log(
    //   "\n\nsend-mail-using-nodemailer.js  --usecase--  was called\n\n"
    // );

    const validationValue = isValid({
      from,
      to,
      subject,
      cc,
      bcc,
      replyTo,
      inReplyTo,
      text,
      html,
      attachments,
      refrences,
    });

    const sendMailResult = await sendMail({ validationValue });

    return sendMailResult;
  };

  function isValid({
    from,
    to,
    subject,
    cc,
    bcc,
    replyTo,
    inReplyTo,
    text,
    html,
    attachments,
    references,
  }) {
    console.log(
      "\n\nsend-mail-controller.js joi validation function was called\n\n"
    );
    const schemas = Joi.object({
      from: Joi.string().optional(),
      to: Joi.array().items(Joi.string().optional()),
      cc: Joi.string().optional(),
      bcc: Joi.string().optional(),
      replyTo: Joi.string().optional(),
      inReplyTo: Joi.string().optional(),
      subject: Joi.string().optional(),
      text: Joi.string().optional(),
      html: Joi.string().optional(),
      attachments: Joi.array()
        .items(
          Joi.object({
            filename: Joi.string().optional(),
            path: Joi.string().optional(),
            cid: Joi.string().optional(),
          })
        )
        .optional(),
      references: Joi.array().items(Joi.string().optional()),
    });
    const { value, error } = schemas.validate({
      from,
      to,
      subject,
      cc,
      bcc,
      replyTo,
      inReplyTo,
      text,
      html,
      attachments,
      references,
    });
    if (error) {
      const message = error.details[0].message;
      throw message;
    } else {
      console.log(value);
      return value;
    }
  }

  async function sendMail({ validationValue }) {
    console.log(
      "\n\nsendmail function was called in send-mail-using-nodemailer.js\n\n"
    );
    const userData = await dataAccessUserFunction.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: 'OAuth2',
        user: userData.user_email,
        accessToken: userData.access_token,
      },
    });
    return new Promise((resolve, reject) => {
      transport.sendMail(validationValue, (error, info) => {
        if (error) {
          reject(error);
        } else {
          const response = {
            emailSend: info.response,
            messageId: info.messageId,
            id: info.envelope,
          };
          resolve(response);
        }
      });
    });
  }
};
