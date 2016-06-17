'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();
// Create API group routes
var apiRoutes = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

// apiRoutes.post('/register', controller.registerUser);
module.exports = router;
// module.exports = apiRoutes;
