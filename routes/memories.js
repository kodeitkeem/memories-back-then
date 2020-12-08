const express = require('express');
const router = express.Router();

const memoriesCtrl = require('../controllers/memories');

router.get('/', isLoggedIn, memoriesCtrl.index);
router.get('/new', isLoggedIn, memoriesCtrl.new);
router.post('/', isLoggedIn, memoriesCtrl.create);
router.get('/:id/edit', isLoggedIn, memoriesCtrl.edit);
router.get('/:id', isLoggedIn, memoriesCtrl.show);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}

module.exports = router;