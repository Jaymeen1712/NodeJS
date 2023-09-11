const express = require("express");
const userRouter = require("./rest-services");
const app = express();

// BODY PARSER
app.use(express.json());

// MOUNTING ROUTES
app.use("/api/v1", userRouter.router);

app.listen(4000, () => {});
