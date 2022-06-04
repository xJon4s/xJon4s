const express = require('express');
const router = express.Router();
const { getAllPlayerAction,getAllDeckAction, postGameAction, postGamesAction } = require('./db.controller');
router.get('/player', getAllPlayerAction);
router.get('/deck', getAllDeckAction);
router.post('/game', postGameAction);
router.post('/games', postGamesAction);
/*
router.get('/user/:id', getUserAction);
router.get('/deck/:id', getDeckAction); */
module.exports = router; 