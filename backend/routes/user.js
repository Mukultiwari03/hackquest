  const express = require("express");
  const router = express.Router();

  const User = require("../models/User");

  const {login,signup} = require("../controllers/Auth");
  const {deleteObject} = require("../controllers/Delete");
  const {student} = require("../controllers/Student");
  const {status} = require("../controllers/status");
  router.post("/login",login);
  router.post("/signup",signup);
  router.post('/student',student);
  router.post('/status',status)
  router.post('/delete',deleteObject)
  
  module.exports = router;