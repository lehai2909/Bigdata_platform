var express = require('express');
var router = express.Router();

var pet_instances_controller = require('../controllers/pet_instances_controller');
//var pet_statistics_controller = require('../controllers/pet_statistics_controller');

router.get('/petInstances', pet_instances_controller.index);
//router.get('/petStatistics', pet_statistics_controller.stat);

module.exports = router;