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

// POST new user creation form
exports.doCreate = function (req, res) {
    User.create({
        name: req.body.FullName,
        email: req.body.Email,
        modifiedOn: Date.now(),
        lastLogin: Date.now()
    }, function (err, user) {
        if (err) {
            console.log(err);
            if (err.code === 11000) {
                alert('error');
                res.redirect('/user/new?exists=true');
            } else {
                res.redirect('/?error=true');
            }
        } else {
            // Success
            console.log("User cretated and savced: " + user);
            res.redirect('/user/new?saved=true');
        }
    });
};