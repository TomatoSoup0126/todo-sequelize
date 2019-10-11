const express = require('express')
const router = express.Router()


//載入 user model
//載入 todo model
const db = require('../models')
const User = db.User
const Todo = db.Todo

//載入auth middleware
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  res.send('列出全部 Todo')
})

module.exports = router

