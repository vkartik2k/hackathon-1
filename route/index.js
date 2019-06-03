const route = require("express").Router()
const db = require('../database')
const passport = require("../passport.js");
const learners = db.learners


route.post('/ashevisdkedjiqac', function(req, res, next) {
    passport.authenticate('local', function(err, learners, info) {
      if (err) { return res.send(false); }
      if (!learners) { return res.send(false) }
      req.logIn(learners, function(err) {
        if (err) { return res.send(false); }
        return res.send(learners);
      });
    })(req, res, next);
})
let lid = 101;
route.post("/jhucdghnbyhfxpqm", function (req, res, next) {
  learners.create({
      contactno:req.body.phoneno,
      name : req.body.name,
      email:req.body.email,
      password:req.body.password,
      program: req.body.state,
      LID : lid,
      course : "",
      program: '',
      semester: "",
      batch: ""

  }).then((learners) => {
    
      
      res.send(true)})
  .catch((err) => { console.error(err)
      res.send(false)})
  console.log("ADDED TO DATABASE")
  lid++;
})

module.exports = route
