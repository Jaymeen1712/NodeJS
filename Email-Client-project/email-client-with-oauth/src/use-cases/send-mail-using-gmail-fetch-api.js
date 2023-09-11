module.exports = function createSendMailUsingGmailFetchRequrest({
  cheerio,
  fs,
  mime,
  path,
  fetch,
  Joi,
  dataAccessUserFunction,
}) {
  return async function sendMailUsingGmailFetchRequest({
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
    console.log(
      "\n\nsend-mail-using-gmail-fetch-api.js  --usecase--  was called\n\n"
    );

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

    let formatedTo = setToAndFrom({ arr: validationValue.to.split(", ") });
    let formatedFrom = setToAndFrom({ arr: validationValue.from.split(", ") });

    const multipart = [
      `to: ${formatedTo}`,
      `from: ${formatedFrom}`,
      `subject: ${validationValue.subject}`,
      `Content-Type: multipart/mixed; boundary=boundary`,
      "",
      "--boundary",
      "Content-Type: multipart/alternative; boundary=alt_boundary",
      "",
      `--alt_boundary`,
      `Content-Type: text/plain; charset="UTF-8"`,
      `Content-Transfer-Encoding: 8bit`,
      "",
      `${validationValue.text}`,
      `--alt_boundary`,
      `Content-Type: text/html; charset="UTF-8"`,
      `Content-Transfer-Encoding: 8bit`,
      "",
      `${validationValue.html}`,
      "",
      `--alt_boundary--`,
      "",
    ];

    let inlineAttachments = []
    let attachment = createAttachmentArrayOfObject({
      attachmentsPathArray: validationValue.attachments.split(", "),
      html: validationValue.html,
      inlineAttachments
    });

    console.log(inlineAttachments)
    if (inlineAttachments.length > 0) {
      console.log("called", inlineAttachments[0].cid);
      inlineAttachments.forEach((attachment) => {
        multipart.push('--boundary');
        multipart.push(`Content-Type: ${attachment.mimetype}; name="${attachment.filename}"`);
        multipart.push(`Content-Disposition: inline; filename="${attachment.filename}"`);
        multipart.push(`Content-Transfer-Encoding: base64`);
        multipart.push(`Content-ID: <${attachment.cid}>`);
        multipart.push('');
        multipart.push(attachment.content);
        multipart.push('');
      });
    }

    if (attachment.length > 0) {
      attachment.forEach((attachment) => {
        console.log("called");
        multipart.push("--boundary");
        multipart.push(
          `Content-Type: ${attachment.mimetype}; name="${attachment.fileName}"`
        );
        multipart.push(
          `Content-Disposition: attachment; filename="${attachment.fileName}"`
        );
        multipart.push(`Content-Transfer-Encoding: base64`);
        multipart.push("");
        multipart.push(attachment.content);
        multipart.push("");
      });
    }

    multipart.push("--boundary--");
    multipart.push("");

    const messageRaw = Buffer.from(multipart.join("\n")).toString("base64");

    const userData = await dataAccessUserFunction.getAccessToken();

    const sendMailResult = await sendMail({ messageRaw, accessToken: userData.access_token });

    return sendMailResult

  };

  function isValid({ from, to, subject, cc, bcc, replyTo, inReplyTo, text, html, attachments, references, }) {
    console.log(
      "\n\nsend-mail-using-gmail-feth-api.js usecase joi validation function was called\n\n"
    );
    const schemas = Joi.object({
      from: Joi.string().optional(),
      to: Joi.string().required(),
      cc: Joi.string().optional(),
      bcc: Joi.string().optional(),
      replyTo: Joi.string().optional(),
      inReplyTo: Joi.string().optional(),
      subject: Joi.string().optional(),
      text: Joi.string().optional(),
      html: Joi.string().optional(),
      attachments: Joi.string().optional(),
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

  async function sendMail({ messageRaw, accessToken }) {
    console.log(
      "\n\nsendmail function was called in send-mail-using-gamil-fetch-api.js\n\n"
    );
    const response = await fetch(
      "https://www.googleapis.com/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          raw: messageRaw,
        }),
      }
    );

    const ans = await response.json();
    console.log(ans);
    return ans;
  }

  function setToAndFrom({ arr }) {
    val = "";
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        val = val + arr[i] + " ";
      }
      if (i % 2 !== 0 && i !== arr.length - 1) {
        val = val + "<" + arr[i] + ">" + ",";
      }
      if (i === arr.length - 1) {
        val = val + "<" + arr[i] + ">";
      }
    }
    return val;
  }

  function createAttachmentArrayOfObject({ attachmentsPathArray, html, inlineAttachments }) {
    let attachments = [];
    let check = [];
    for (let i = 0; i < attachmentsPathArray.length; i++) {
      let obj = {};
      obj.fileName = path.basename(attachmentsPathArray[i]);
      obj.content = fs.readFileSync(attachmentsPathArray[i]).toString("base64");
      obj.mimetype = mime.getType(attachmentsPathArray[i]);
      const $ = cheerio.load(html);
      const imgElements = $('img').map((i, el) => $(el).attr('src')).get();
      console.log(imgElements, i);
      if (obj.mimetype === "image/png" && check.length != imgElements.length) {
        check.push(imgElements[i]);
        obj.cid = imgElements[i].split(':')[1];
        inlineAttachments.push(obj);
      }
      else {
        attachments.push(obj);
      }
    }
    return attachments;
  }
};