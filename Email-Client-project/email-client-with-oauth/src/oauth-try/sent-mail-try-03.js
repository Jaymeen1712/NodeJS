const fetch = require('node-fetch');
const fs = require('fs');

const accessToken = "ya29.a0AWY7CkmBN2mJsq56TB9wHpY-z2TUYu4AfXam4Fdzd-f0vhMwsEIZs9sVkuyqwqsiWpxKRfI4K7H9MiFDnG2zvpkEAolqNZ6cr6_kGhxsFNpLZcCEY7ZbwSlNkrdCnBo_HmxpHTDOdLCXf0ORGkcNCMYh_qYIL-IaCgYKAcgSARASFQG1tDrpYPUUvxqa1FnDDtZxGMhiRA0166"


const message = {
    to: {
        name: 'mugish beldar',
        email: 'mugishbeldar333@gmail.com',
    },
    from: {
        name: 'mugish beldar',
        email: 'mugishbeldar333@gmail.com',
    },
    body: {
        text: "Mr hänn is schon lang nümme g'she.",
        html: "Mr hänn is schon <b>lang nümme</b> g'she.",
    },
    subject: 'ctrlq, tech à la carte',
    attachments: [
        {
            filename: 'login .png',
            content: fs.readFileSync('/home/ad.rapidops.com/mugish.beldar/Git-Repository/Mugish-Beldar/email-client-using-oauth/src/attachments-files/login .png').toString('base64'),
        },
        {
            filename: 'login .png',
            content: fs.readFileSync('/home/ad.rapidops.com/mugish.beldar/Git-Repository/Mugish-Beldar/email-client-using-oauth/src/attachments-files/login .png').toString('base64'),
        },
    ],
};

const multipart = [
    `to: ${message.to.name} <${message.to.email}>`,
    `from: ${message.from.name} <${message.from.email}>`,
    `subject: ${message.subject}`,
    `Content-Type: multipart/mixed; boundary=boundary`,
    '',
    '--boundary',
    'Content-Type: multipart/alternative; boundary=alt_boundary',
    '',
    `--alt_boundary`,
    `Content-Type: text/plain; charset="UTF-8"`,
    `Content-Transfer-Encoding: 8bit`,
    '',
    `${message.body.text}`,
    `--alt_boundary`,
    `Content-Type: text/html; charset="UTF-8"`,
    `Content-Transfer-Encoding: 8bit`,
    '',
    `${message.body.html}`,
    '',
    `--alt_boundary--`,
    '',
];

message.attachments.forEach((attachment) => {
    multipart.push('--boundary');
    multipart.push(`Content-Type: ${attachment.mimetype}; name="${attachment.filename}"`);
    multipart.push(`Content-Disposition: attachment; filename="${attachment.filename}"`);
    multipart.push(`Content-Transfer-Encoding: base64`);
    multipart.push('');
    multipart.push(attachment.content);
    multipart.push('');
});

multipart.push('--boundary--');
multipart.push('');

const messageRaw = Buffer.from(multipart.join('\n')).toString('base64');

async function emailFetch() {
    const response = await fetch(
        'https://www.googleapis.com/gmail/v1/users/me/messages/send',
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                raw: messageRaw,
            }),
        }
    );

    const ans = await response.json();
    console.log(ans);
}

emailFetch();

