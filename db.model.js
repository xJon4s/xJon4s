const mysql = require("mysql");
const connectionProperties = {
  host: "ptah07.seeweb.it",
  user: "testuser",
  password: "",
  database: "mtg"
};
class Database {
  constructor(connectionProperties) {
    this.connection = mysql.createConnection(connectionProperties);
  }
  query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
  queryClose(sql, params) {
    const ret = this.query(sql, params);
    this.close();
    return ret;
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }
}

async function getAllPlayerDatabase() {
  try {
    const database = new Database(connectionProperties);
    const sql = `Select * from Players`;
    const result = await database.queryClose(sql);
    return Promise.resolve(result);
  } catch (e) {
    console.log(e);
    return Promise.reject(error);
  }
}

module.exports = { getAllPlayerDatabase };
