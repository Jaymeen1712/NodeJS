// const { dataAccessLableFunction, cockroach } = require("./index");
// const pool = require("../database-connection");
// module.exports = {
// FUNCTION FOR CHECKING USER EXIST OR NOT IN DATABASE
// async isUserExist(value) {
//   const conn = await pool.getConnection();
//   try {
//     const [rows] = await conn.query('SELECT * FROM Users WHERE userEmail = ?', [value.userEmail])
//     if(rows.length == 0) {
//       return true;
//     }
//     else { return false;}
//   } catch(error) {
//     throw error
//   } finally {
//     conn.release();
//   }
// },

// FUNCTION FOR FETCHING SINGLE USERDATA FROM DATABASE
// async read(id) {
//   const conn = await pool.getConnection();
//   try {
//     const [result] = await conn.query(`SELECT * FROM Users WHERE id = ${id}`);
//     return result;
//   } catch (err) {
//     throw err;
//   } finally {
//     conn.release();
//   }
// },

// // FUNCTION FOR CREATE NEW USER IN DATABASE
// async create(value) {
//   const conn = await pool.getConnection();
//   try {
//     const sql =
//       "INSERT INTO Users (userName, userEmail, accessToken, refreshToken, photo) VALUES (?,?,?,?,?)";
//     const values = [
//       value.userName,
//       value.userEmail,
//       value.accessToken,
//       value.refreshToken,
//       value.photo,
//     ];
//     const [result] = await conn.query(sql, values);
//     console.log(result);
//     let resultArr = [result.affectedRows, result.insertId];
//     return resultArr;
//   } catch (error) {
//     console.log(error);
//     return error;
//   } finally {
//     conn.release();
//   }
// },

// // FUNCTION FOR UPDATE EXISTING USER DATA
// async update(value, id) {
//   console.log("value: ", value);
//   const conn = await pool.getConnection();
//   try {
//     for (key in value) {
//       const sql = `UPDATE Users SET ${key} = ? where id = ?`;
//       const keyValue = value[key];
//       var [result] = await conn.query(sql, [keyValue, id]);
//     }
//     return result;
//   } catch (err) {
//     return err;
//   } finally {
//     conn.release();
//   }
// },

// // FUNCTION FOR UPDATE EXISTING USER DATA
// async deletedb(id) {
//   const conn = await pool.getConnection();
//   const sql = `DELETE FROM Users WHERE id = ${id}`;
//   const [result] = await conn.query(sql);
//   return result;
// },


// // PAGINATE USER FUNCTIONS;
// async paginateUsersdb({ limit, offset }) {
//   const conn = await pool.getConnection();
//   // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",limit, offset);
//   try {
//     // const offSet = (page - 1) * limit;
//     const sql = `SELECT * FROM Users LIMIT ${limit} OFFSET ${offset}`;
//     // const sql = `SELECT Users.*, Lables.* FROM Users LEFT JOIN Lables ON Users.id = Lables.userId LIMIT ${limit} OFFSET ${offset}`;
//     const [result] = await conn.query(sql);
//     // console.log(result);
//     return result;
//   } catch (error) {
//     return error;
//   } finally {
//     conn.release();
//   }
// }



// cockroach 
//   async create(value) {
//     console.log("Called");
//     const values = [
//       value.userName,
//       value.userEmail,
//       value.accessToken,
//       value.refreshToken,
//       value.photo,
//     ];
//     const sql =
//       "INSERT INTO users (user_name, user_email, access_token, refresh_token, photo) VALUES ($1,$2,$3,$4,$5) returning id";

//     const result = await cockroach.query(sql, values);
//     console.log("result is here----------------------------", result);
//     console.log("___________rowcounts__________________", result.rowCount);
//     console.log("___________rowid__________________", result.rows[0].id);
//     const arr = [result.rowCount, result.rows[0].id]
//     return arr;

//   },
// };


function userDbFunctions({ cockroach }) {
  return {
    create,
    read,
    deletedb,
    update,
    paginateUsersdb
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
      ];
      const sql =
        "INSERT INTO users (user_name, user_email, access_token, refresh_token, photo) VALUES ($1,$2,$3,$4,$5) returning id";

      const result = await cockroach.query(sql, values);
      const arr = [result.rowCount, result.rows[0].id]
      return arr;
    } catch (error) {
      throw (error.detail);
    }
  }

  async function read({ id }) {
    try {
      // console.log("read db id is here:-", id);
      const result = await cockroach.query(`SELECT * FROM users WHERE id = '${id}'`);
      // console.log("result is here..........................................", result);
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
      console.log(err)
      throw err;
    }
  }

  // PAGINATE USER FUNCTIONS;
  async function paginateUsersdb({ limit, offset }) {
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",limit, offset);

    try {
      // const offSet = (page - 1) * limit;
      const sql = "SELECT * FROM users LIMIT $1 OFFSET $2";
      // const sql = `SELECT Users.*, Lables.* FROM Users LEFT JOIN Lables ON Users.id = Lables.userId LIMIT ${limit} OFFSET ${offset}`;
      const result = await cockroach.query(sql, [limit, offset]);
      console.log("crud result is here:----------------", result);
      return result;
    } catch (error) {
      return error;
    }

  }
};

module.exports = userDbFunctions;
