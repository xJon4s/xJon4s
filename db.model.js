const mysql = require("mysql");
const connectionProperties = {
  host: "ptah07.seeweb.it",
  user: "testuser",
  password: "F6l16bv#",
  database: "mtg",
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

async function getAllDeckDatabase() {
  try {
    const database = new Database(connectionProperties);
    const sql = `Select * from Decks`;
    const result = await database.queryClose(sql);
    return Promise.resolve(result);
  } catch (e) {
    console.log(e);
    return Promise.reject(error);
  }
}

async function postGame(gameplayer) {
  try {
    const database = new Database(connectionProperties);
    const sql = `INSERT INTO Games (pid, did, gwin, gdmg, gkills) Values (?,?,?,?,?)`;
    const sql2 = `SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = "mtg" AND TABLE_NAME = "Games"`;
    await database.query(sql, [
      gameplayer.pid,
      gameplayer.did,
      gameplayer.gwin,
      gameplayer.gdmg,
      gameplayer.gkills,
    ]);

    let result = await database.queryClose(sql2);
    return Promise.resolve(result);
  } catch (e) {
    console.log(e);
    return Promise.reject(error);
  }
}

async function postGamev2(gameplayer) {
  try {
    const database = new Database(connectionProperties);
    const sql = `INSERT INTO Games (gid, pid, did, gwin, gdmg, gkills) Values (?,?,?,?,?,?)`;
    let result = await database.queryClose(sql, [
      gameplayer.gid,
      gameplayer.pid,
      gameplayer.did,
      gameplayer.gwin,
      gameplayer.gdmg,
      gameplayer.gkills
    ]);

    return Promise.resolve(result);
  } catch (e) {
    console.log(e);
    return Promise.reject(error);
  }
}

module.exports = { getAllPlayerDatabase, getAllDeckDatabase, postGame, postGamev2 };
