const controller  = require('./user.controller');
const Router = require('express').Router; 
const router = Router();

router
    .route('/newUser')
    .post(controller.newUser);

module.exports = router;