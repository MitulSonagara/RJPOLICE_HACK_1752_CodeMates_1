const express = require('express');
const router = express.Router();
const passport = require('passport');

// Login Route
router.get('/', (req, res) => {
    res.render('login');
});

router.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/dashboard',
    }),
    (req, res) => {
        console.log(req.user);
    }
);

module.exports = router;

