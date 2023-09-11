module.exports = function sendMailController({
  sendMailUsingNodemailer,
  sendMailUsingGmailFetchRequest,
  Joi,
}) {
  return async function sendMailControllerAction(req, res) {
    try {
      console.log("\n\nsend-mail-controller.js was called\n\n");

      const emailFeilds = req.body;
      const validationValue = isValid({
        from: emailFeilds.from,
        to: emailFeilds.to,
        cc: emailFeilds.cc,
        bcc: emailFeilds.bcc,
        replyTo: emailFeilds.replyTo,
        inReplyTo: emailFeilds.inReplyTo,
        subject: emailFeilds.subject,
        text: emailFeilds.text,
        html: emailFeilds.html,
        attachments: emailFeilds.attachments,
        references: emailFeilds.references,
      });

      console.log(
        validationValue,
        "joi validationValue value is here in send-mail-controller.."
      );

      // send mail by nodemailer --usecase-- is called
      // const sendMailUsecaseResult = await sendMailUsingNodemailer({
      //   from: validationValue.from,
      //   to: validationValue.to,
      //   cc: validationValue.cc,
      //   bcc: validationValue.bcc,
      //   replayTo: validationValue.replayTo,
      //   inReplyTo: validationValue.inReplyTo,
      //   subject: validationValue.subject,
      //   text: validationValue.text,
      //   html: validationValue.html,
      //   attachments: validationValue.attachments,
      //   references: validationValue.references,
      // });

      // res.status(200).send({
      //   success: true,
      //   status: sendMailUsecaseResult,
      //   message: "Email sent successfully",
      // });

      // send mail by fetch request --usecase-- is called
      const sendMailUsecaseResult = await sendMailUsingGmailFetchRequest({
        from: validationValue.from,
        to: validationValue.to,
        cc: validationValue.cc,
        bcc: validationValue.bcc,
        replayTo: validationValue.replayTo,
        inReplyTo: validationValue.inReplyTo,
        subject: validationValue.subject,
        text: validationValue.text,
        html: validationValue.html,
        attachments: validationValue.attachments,
        references: validationValue.references,
      });

      // console.log("send mailUsecaseResult in controller file send-mail-controller.js: ", sendMailUsecaseResult);
        res.status(200).send({
        success: true,
        status: sendMailUsecaseResult,
        message: "Email sent successfully",
      });

    } catch (error) {
      console.log("\n\n error in send-mail-controller.js\n\n",error);
      res.status(500).send({
        success: false,
        status: error,
        message: "Failed to sent mail",
      });
    }
    
  // JOI VALIDATION FUNCTION
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
        "\n\nsend-mail-controller.js joi validationValue function was called\n\n"
      );
      const schemas = Joi.object({
        from: Joi.string().optional(),
        // to: Joi.array().items(Joi.string().optional()),
        to: Joi.string().required(),
        cc: Joi.string().optional(),
        bcc: Joi.string().optional(),
        replyTo: Joi.string().optional(),
        inReplyTo: Joi.string().optional(),
        subject: Joi.string(),
        text: Joi.string().optional(),
        html: Joi.string().optional(),
        references: Joi.array().items(Joi.string().optional()),
        attachments: Joi.string().optional(),
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
  };
};

// attachments: Joi.array()
//   .items(
//     Joi.object({
//       filename: Joi.string().optional(),
//       path: Joi.string().optional(),
//       cid: Joi.string().optional(),
//     })
//   )
//   .optional(),
