const express = require("express")
const session = require("express-session");
const route = require(__dirname+'/route')
const db = require('./database')
const passport = require('./passport')
const server = express()

server.use(express.json())
server.use(express.urlencoded({extension:true}))
server.use(session({
    secret: 'iloveabigstringwhichissecret'
}))
server.use(passport.initialize())
server.use(passport.session())


server.use('', express.static(__dirname+'/public'))
server.use('/login', express.static(__dirname+'/public/login.html'))
server.use('/register', express.static(__dirname+'/public/register.html'))
server.use('/dashboard',function(req,res,next){
    if(!req.user){
        res.send("<h2>Access denied!</h2>")
    }
    else{
        next();
    }
})
server.use('/dashboard', express.static(__dirname+'/public/dashboard.html'))

server.use('/semesterregistration', express.static(__dirname+'/public/semregistration.html'))
server.use('/feedback', express.static(__dirname+'/public/feedback.html'))
server.use('/route',route)

server.listen(3000, function(){
    console.log("Server running on http://localhost:3000")
})