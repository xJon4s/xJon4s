const express = require('express');
const router = express.Router();
const { getAllPlayerAction } = require('./db.controller');
router.get('/player', getAllPlayerAction);
/* router.get('/deck', getAllDeckAction);
router.get('/user/:id', getUserAction);
router.get('/deck/:id', getDeckAction); */
module.exports = router; 