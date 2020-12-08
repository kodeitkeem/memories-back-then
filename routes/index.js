// require modules
const router = require('express').Router();

const passport = require('passport');

const userCtrl = require('../controllers/users');

//login route

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/memories',
    failureRedirect: '/'
}));

// logout route
router.get('/logout', function(req, res){
    req,logOut(); // destroy the session
    res.redirect('/');
})

router.get('/', userCtrl.index)


module.exports = router;