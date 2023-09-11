function userDbFunctions({ cockroach }) {
  return {
    create,
    read,
    deletedb,
    update,
    paginateUsersdb,
    expiresIndb,
    updateExpiresIndb,
    getAccessToken
  }

  // cockroach 
  async function create(value) {
    try {

      const values = [
        value.userName,
        value.userEmail,
        value.accessToken,
        value.refreshToken,
        value.photo,
        value.expiresIn
      ];
      const sql =
        "INSERT INTO users (user_name, user_email, access_token, refresh_token, photo, expires_in) VALUES ($1,$2,$3,$4,$5,$6) returning id";

      const result = await cockroach.query(sql, values);
      const arr = [result.rowCount, result.rows[0].id]
      return arr;
    } catch (error) {
      throw (error.detail);
    }
  }

  async function read({ id }) {
    try {
      const result = await cockroach.query(`SELECT * FROM users WHERE id = '${id}'`);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async function deletedb({ id }) {
    try {
      const sql = `DELETE FROM Users WHERE id = '${id}'`;
      const result = await cockroach.query(sql);
      return result;
    } catch (err) {
      throw err
    }
  }

  async function update({ entitiesValue, userId }) {
    try {
      for (key in entitiesValue) {
        if (entitiesValue[key] != undefined) {
          const sql = `UPDATE users SET ${key} = $1 where id = $2`;
          const keyValue = entitiesValue[key];
          var result = await cockroach.query(sql, [keyValue, userId]);
        }
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  // PAGINATE USER FUNCTIONS;
  async function paginateUsersdb({ limit, offset }) {

    try {
      const sql = "SELECT * FROM users LIMIT $1 OFFSET $2";
      const result = await cockroach.query(sql, [limit, offset]);
      return result;
    } catch (error) {
      return error;
    }

  }

  async function expiresIndb() {
    const sql = "SELECT * FROM users";
    const result = await cockroach.query(sql);
    return result.rows;
  }

  async function updateExpiresIndb({accessToken, expiresIn ,refreshToken }) {
    const sql = `UPDATE users SET access_token='${accessToken}', expires_in='${expiresIn}' WHERE refresh_token='${refreshToken}'`
    const result = await cockroach.query(sql);
  }

  async function getAccessToken() {
        const result = await cockroach.query(`SELECT * FROM users`);
        return result.rows[0];
    }
  }
module.exports = userDbFunctions;
