const express = require("express");
const app = express();

app.use(express.json());

const { db } = require("./firebase");

const port = 4040;

app.listen(port, () => {
  console.log("Server listening on port", port);
});

app.post("/addUser", async (req, res) => {
  const { name } = req.body;
  const userRef = db.collection("user").doc("associates");
  const res2 = await userRef.set({
    name,
  });
  res.status(200).send(res2);
});
