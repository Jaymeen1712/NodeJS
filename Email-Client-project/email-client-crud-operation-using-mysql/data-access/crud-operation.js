function fetchdb(con) {
  con.query("select * from Users", (err, result, feild) => {
    if (err) {
      console.log(err);
    } else {
      const ans = JSON.parse(JSON.stringify(result));
      console.log(ans);
      return ans;
    }
  });
}

function createdb(con, value) {
  console.log("value:-", value);
  const sql =
    "INSERT INTO Users (username, useremail, access_token, refresh_token, photo, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?)";
  console.log("created At", value.createdAt);
  const values = [
    value.username,
    value.useremail,
    value.access_token,
    value.refresh_token,
    value.photo,
    value.createdAt,
    value.updatedAt,
  ];
  console.log(values);
  con.query(sql, values, (err, result, feild) => {
    // console.log(feild);
    if (err) {
      console.log(err);
    } else {
      console.log("hihih");
      console.log("result", result);
      return result;
    }
  });
}

function updatedb(con, bodyValue, bodyParam) {
  let sql = "UPDATE Users SET username = ? where id = ?";
  console.log(bodyParam);
  let values = [bodyValue.username, bodyParam];
  con.query(sql, values, (err, result, feild) => {
    if (err) {
      console.log(err);
    } else {
      console.log("result", result);
      //   res.send(result);
      return result;
    }
  });
}

function deletedb(con, bodyParam) {
  var sql = `DELETE FROM Users WHERE id = ${bodyParam}`;
  con.query(sql, (err, result) => {
    console.log(result);
    // resp.send(result);
  });
}

module.exports = Object.freeze({
  fetchdb,
  createdb,
  updatedb,
  deletedb,
});
