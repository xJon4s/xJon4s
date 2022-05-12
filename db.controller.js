const res = require("express/lib/response");
const dbModel = require("./db.model");

async function getAllPlayerAction(request, response) {
  try {
    res = await dbModel.getAllPlayerDatabase()
  } catch (error) {
    res = error;
  }
  response.send(
    res
  );
}

module.exports = {
    getAllPlayerAction
}