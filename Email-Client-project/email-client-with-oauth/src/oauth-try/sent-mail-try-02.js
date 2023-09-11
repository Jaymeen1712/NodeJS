const base64 = require('base64-js');
const fetch = require("node-fetch");
// const Utilities = require('google-apps-script').Utilities;

const accessToken = 'ya29.a0AWY7CkmHTcr0Mvbk5N2KKhCFV1f8NawO3jgSQ6XKRxaes3RkW3S7O0_y73PEfFvldacZjOvmWlyZB3pX27q46e97LZRcW3WX7NRa7utIHUr2jJSbZWWNSE02Gwn501-ekGujVWVzH29zxZE6BJch_EGne1uX1TcaCgYKAUMSARASFQG1tDrpJ90Zy5uL2RKHKn2BUiu0DA0166'; // your access token is here
const userId = 'me';

const message = {
    subject: 'Test Email',
    to: {
        name: 'Google Scripts',
        email: 'ssip2k22@gmail.com',
    },
    from: {
        name: 'mugish beldar',
        email: 'mugishbeldar333@gmail.com',
    },
    body: {
        text: "This is a test email sent by mgishbeldar.",
        html: "This is a test email <br> sent by <b>mgishbeldar</b>.",
    },
};

function createMimeMessage_(message) {
    console.log("message", message);
    var nl = '\n';
    var boundary = '__ctrlq_dot_org__';
    var mimeBody = [
        'MIME-Version: 1.0',
        'To: ' + encodeURIComponent(message.to.name) + ' <' + message.to.email + '>',
        'From: ' + encodeURIComponent(message.from.name) + ' <' + message.from.email + '>',
        'Subject: ' + encodeURIComponent(message.subject), // takes care of accented characters

        'Content-Type: multipart/alternative; boundary=' + boundary + nl,
        '--' + boundary,

        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64' + nl,
        Buffer.from(message.body.text).toString('base64') + nl,
        '--' + boundary,

        'Content-Type: text/html; charset=UTF-8',
        'Content-Transfer-Encoding: base64' + nl,
        Buffer.from(message.body.html).toString('base64') + nl,


    ];
    console.log(mimeBody+"\n\n")

    mimeBody.push('--' + boundary + '--');

    return mimeBody.join(nl);
}

const headers = new fetch.Headers({
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'message/rfc822'
});

var payload = createMimeMessage_(message);

async function emailSender() {
    const email = await fetch(`https://www.googleapis.com/upload/gmail/v1/users/me/messages/send?uploadType=media`, {
        method: 'POST',
        headers: headers,
        uteHttpExceptions: true,
        payload: payload,
    })
    const response = await email.json();
    console.log(response, "***********");
}
emailSender();