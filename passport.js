const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const learners = require('./database/index.js').learners

passport.serializeUser(function(learners, done){
    done(null, learners.email)
})

passport.deserializeUser(function(email, done){
    learners.findOne({
        where : {
            email : email
        }
    }).then((learners) => {
        if (!learners) {
            return done(new Error("No such user"))
        }
        return done(null, learners)
    }).catch((err) => {
        done(err)
    })

})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},function (email, password, done) {
    learners.findOne({
        where: {
            email : email
        }
    }).then((learners) => {
        console.log(learners);
        if (!learners) {
            return done(null, false, {message: "No such user"})
        }
        if (learners.password !== password) {
            return done(null, false, {message: "Wrong password"})
        }
        return done(null, learners)
    }).catch((err) => {
        return done(err)
    })
}))

exports = module.exports = passport