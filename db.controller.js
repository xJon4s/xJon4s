const res = require("express/lib/response");
const dbModel = require("./db.model");

async function getAllPlayerAction(request, response) {
  let res;
  try {
    res = await dbModel.getAllPlayerDatabase()
  } catch (error) {
    res = error;
  }
  response.send(
    res
  );
}

async function getAllDeckAction(request, response) {
  console.log("got all decks");
  let res;
  try {
    res = await dbModel.getAllDeckDatabase()
  } catch (error) {
    res = error;
  }
  response.send(
    res
  );
}

async function postGameAction(request,response) {
  let res;
  try {
    res = await dbModel.postGame(request.body)
  } catch (error) {
    res = error;
  }
  response.send(
    res
  );
}

async function postGamesAction(request,response) {
  let res;
  try {
    res = await dbModel.postGamev2(request.body)
  } catch (error) {
    res = error;
  }
  response.send(
    res
  );
}

module.exports = {
    getAllPlayerAction, getAllDeckAction, postGameAction, postGamesAction
}