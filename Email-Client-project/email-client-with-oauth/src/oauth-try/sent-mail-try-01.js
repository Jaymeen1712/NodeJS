const fetch = require("node-fetch");

const sendMessage = () => {
  const accessToken = 'ya29.a0AWY7CknbhIQo5fJZj8_SW8p5OVKJmsAxnDEf470DdsolvAXo6ce4NkTCCucd6NiBzq8eRPKgpLIaFiLZqWlitcjKg9YopfAS_YhXI6ozXjb3eavHBP4fPK3XRn9OY_RaE1Lk6LhUXdtcPfq6icZV9x2raCthaCgYKAY4SARASFQG1tDrpXVQjeHSUwkytB2o9EWi6Uw0163';
  const message = {
    to: 'mugishbeldar333@gmail.com',
    body: 'Hello, this is a test email',
    cc: 'cc1@example.com, cc2@example.com',
    replyTo: 'mugishbeldar333@gmail.com',
    subject: 'Test email',
    text: 'This email is sent from the command line',
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
  };
  
  const headers = {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json'
  };

  const encodedMessage = Buffer.from(
    `To: ${message.to},\r\n` +
    `CC: ${message.cc},\r\n` +
    `Subject: ${message.subject},\r\n\r\n` +
    `${message.body}` 

  ).toString('base64');
  
  const data = JSON.stringify({
    raw: encodedMessage
  });
  
  fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: headers,
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
};
sendMessage();
