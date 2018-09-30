const User = require('../models/user')

const lodash = require('lodash')


exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
User.findOne({email: email}, function(err, existingUser){
    if(err){
        return next(err)
    }
    if(existingUser){
        return res.status(422).send({error: "email deja utilisé"})
    }
    if(lodash.isEmpty(email) || lodash.isEmpty(password)){
        return res.status(422).send({error: "le password est vide"})
    }else{
        const user = new User({
            email: email,
            password: password
        });
        user.save(function(err){
            if(err){
                return next(err);
            }
            res.json(user);
        })
    }
})
}