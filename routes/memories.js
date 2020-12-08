const express = require('express');
const router = express.Router();

const memoriesCtrl = require('../controllers/memories');

router.get('/', isLoggedIn, memoriesCtrl.index);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}

module.exports = router;