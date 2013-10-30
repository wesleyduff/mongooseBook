var mongoose = require('mongoose');
var User = mongoose.model('User');

// GET user creation form
exports.create = function (req, res) {
    res.render('user-form', {
        title: 'Create user',
        buttonText: "Join!"
    });
};

exports.index = function (req, res) {
    res.render('user-index', {
        title: 'Users',
        buttonText: "Hello"
    });
};