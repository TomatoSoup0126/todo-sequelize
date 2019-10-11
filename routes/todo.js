const express = require('express')
const router = express.Router()


//載入 user model
//載入 todo model
const db = require('../models')
const User = db.User
const Todo = db.Todo

//載入auth middleware
const { authenticated } = require('../config/auth')

//瀏覽全部todo
router.get('/', authenticated, (req, res) => {
  res.send('列出全部 Todo')
})

//新增一個todo的頁面
router.get('/new', authenticated, (req, res) => {
  res.send('新增Todo的頁面')
})

//新增一個todo
router.post('/', authenticated, (req, res) => {
  res.send('新增Todo')
})



//瀏覽特定todo修改頁面
router.get('/:id', authenticated, (req, res) => {
  res.send('特定Todo')
})


//修改特定todo頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改Todo的頁面')
})

//修改特定todo
router.put('/:id/edit', authenticated, (req, res) => {
  res.send('修改Todo')
})

//刪除特定todo
router.delete('/:id', authenticated, (req, res) => {
  res.send('刪除Todo')
})


module.exports = router