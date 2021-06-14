const router = require('express').Router();
const model = require('../database/model');
const conn = require('../database/conn');

router.get("/add-student-details",model.addData);

router.get("/score",  model.addScore);

module.exports = router;