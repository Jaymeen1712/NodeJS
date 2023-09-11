const express = require("express");
const userRouter = require("./rest-services");
const Cors = require('cors');

// ----------------
const cronForUpdateAccessToken = require('./crons/cron-for-update-access-token')
cronForUpdateAccessToken();
const {
    addLableConsumer,
    addMailsConsumer
} = require('./handlers');

addLableConsumer()
addMailsConsumer()
// ----------------

// require('./handlers/get-messages-consumer');
// const {addLableConsumer} = require('./handlers')
// addLableConsumer()
const app = express();
app.use(Cors());

// BODY PARSER
app.use(express.json());

// MOUNTING ROUTES
app.use("/api/v1", userRouter.router);

app.listen(4000, () => {});
