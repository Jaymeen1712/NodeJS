function lableFunctions({ cockroach }) {
  return {
    createLableDb,
    getLableDb,
    deleteLableDb,
    updateLableDb,
    checkLableExistOrNot,
    fetchLablePrioritywisedb,
    updatePageTokendb,
    fetchLableIddb
  }

  // cockroach 
  async function createLableDb(userId, name, syncedFolder_id, priority) {
    try {
      const lableExistOrNot = await cockroach.query(`SELECT * FROM lables WHERE user_id = '${userId}' AND name = '${name}'`)
      if (lableExistOrNot.rows.length == 0) {
        const sql = "INSERT INTO Lables (user_id, name, syncedFolder_id, priority) VALUES ($1, $2, $3, $4) returning id";
        const values = [userId, name, syncedFolder_id, priority];
        const result = await cockroach.query(sql, values);
        return [result.rowCount, result.rows[0].id];
      }
      else {
        return [0];
      }
    } catch (error) {
      throw error;
    }
  }

  async function getLableDb({ id }) {
    try {
      const result = await cockroach.query(
        `SELECT * FROM lables WHERE user_id = '${id}' ORDER BY priority ASC`
      );
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

  async function checkLableExistOrNot({ userId, name }) {
    const lableExistOrNot = await cockroach.query(`SELECT * FROM lables WHERE user_id = '${userId}' AND name = '${name}'`)
    if (lableExistOrNot.rows.length > 0) {
      const entityId = userId;
      const entityName = name;
      updateLableDb({ entityId, entityName });
    }
    return lableExistOrNot.rows.length
  }

  async function fetchLablePrioritywisedb() {
    const lables = await cockroach.query("select name from lables where fetched=false and priority = (select min(priority) from lables where fetched=false)");
    return lables;
  }

  async function updatePageTokendb({ entityNextPageToken, entityFetched, entityLableName }) {
    const sql = `UPDATE lables SET next_page_token = '${entityNextPageToken}', fetched = ${entityFetched} where name = '${entityLableName}'`;
    const result = await cockroach.query(sql);
  }

  async function fetchLableIddb({ entityLableName }) {
    const sql = `select * from lables where name = '${entityLableName}'`
    const result = await cockroach.query(sql);
    return result.rows[0].id;
  }

}
module.exports = lableFunctions;