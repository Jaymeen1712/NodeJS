const fs = require('fs');
const path = require('path');
const mime = require('mime');

// const filePath = '../attachments-files/login .png';

// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const mimeType = mime.getType(filePath);

//   console.log(mimeType);
// });

// let attachments = [];

// let attachment = '../attachments-files/login .png, ../attachments-files/image006.jpg';

// let attachmentsPathArray = attachment.split(', ');
// console.log(attachmentsPathArray);

// for(let filePath of attachmentsPathArray) {
//     let obj = {}
//     obj.fileName = path.basename(filePath);
//     obj.content = fs.readFileSync(filePath).toString('base64');
//     obj.mimetype = mime.getType(filePath);
//     attachments.push(obj);
// }

// console.log(attachments)


const development = require("../config/development");
const { Pool } = require('pg');

const cockroach = new Pool({
    user: development.config.development.username,
    host: development.config.development.host,
    database: development.config.development.database,
    password: development.config.development.password,
    port: development.config.development.port,
    ssl: development.config.development.dialectOptions.ssl
});

async function read() {
    try {
      const result = await cockroach.query(`SELECT * FROM users`);
      console.log(result.rows[0])
    } catch (err) {
        console.log(err);
    }
  }
  read()