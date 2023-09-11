// const { dataAccessLableFunction,cockroach } = require("./index");

// const pool = require("../database-connection");
function lableFunctions({ cockroach }) {
  return {
    createLableDb,
    getLableDb,
    deleteLableDb,
    updateLableDb
  }


  // async function createLableDb(userId, name) {
  //   console.log("----------------------",name);
  //   const conn = await pool.getConnection();
  //   try {
  //     // let val = ["INBOX", "SEND", "STAR", "BIN", "DELETE"];
  //     // for (let i = 0; i < val.length; i++) {
  //       const sql =
  //         "INSERT INTO Lables (userId, name, syncedFolderId) VALUES (?,?,?)";
  //       const values = [userId, name, name];
  //       const [result] = await conn.query(sql, values);
  //     // }
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     conn.release();
  //   }

  // }

  // async function getLableDb({ id }) {
  //   console.log("get lable called....",id)
  //   const conn = await pool.getConnection();
  //   try {
  //     const [result] = await conn.query(
  //       `SELECT * FROM Lables WHERE userId = ${id}`
  //     );
  //     return result
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     conn.release();
  //   }
  // }

  // async function deleteLableDb({ id }) {
  //   const conn = await pool.getConnection();
  //   try {
  //     const sql = `DELETE FROM Lables WHERE id = ${id}`;
  //     const [result] = await conn.query(sql);
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  //   finally {
  //     conn.release();
  //   }
  // }

  // async function updateLableDb({ name, id }) {
  //   const conn = await pool.getConnection();
  //   try {
  //     const sql = `UPDATE Lables SET name = ? where id = ?`;
  //     var [result] = await conn.query(sql, [name, id]);
  //     return result;

  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     conn.release();
  //   }
  // }



  // cockroach 
  async function createLableDb(userId, name) {
    console.log("-----------*******-----------", name);
    // const conn = await pool.getConnection();
    try {
      // let val = ["INBOX", "SEND", "STAR", "BIN", "DELETE"];
      // for (let i = 0; i < val.length; i++) {
      const sql =
        "INSERT INTO Lables (user_id, name, syncedFolder_id) VALUES ($1, $2, $3)";
      const values = [userId, name, name];
      const result = await cockroach.query(sql, values);
      // }
    } catch (error) {
      throw error;
    }
  }

  async function getLableDb({ id }) {
    // console.log("get lable called...#############################.",id)
    try {
      const result = await cockroach.query(
        `SELECT * FROM lables WHERE user_id = '${id}'`
      );
      // console.log("getlable return @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@is here:- ", result);
      return result
    } catch (error) {
      throw error;
    }
  }

  async function updateLableDb({ entityId, entityName }) {
    try {
      const sql = `UPDATE lables SET name = $1 where id = $2`;
      var result = await cockroach.query(sql, [entityName, entityId]);
      return result;

    } catch (error) {
      throw error;
    }
  }

  async function deleteLableDb({ id }) {
    try {
      const sql = `DELETE FROM lables WHERE id = '${id}'`;
      const result = await cockroach.query(sql);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = lableFunctions;