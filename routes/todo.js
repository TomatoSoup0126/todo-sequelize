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
  return res.render('new')
})

//新增一個todo
router.post('/', authenticated, (req, res) => {
  Todo.create({
    name: req.body.name,
    done: false,
    UserId: req.user.id
  })
    .then((todo) => { return res.redirect('/') })
    .catch((error) => { return res.status(422).json(error) })
})



//瀏覽特定todo頁面
router.get('/:id', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error("user not found");

      return Todo.findOne({
        where: {
          UserId: req.user.id,
          Id: req.params.id
        }
      })
    })
    .then((todo) => {
      return res.render('detail', { todo: todo })
    })
    .catch((error) => { return res.status(422).json(error) })
})


//修改特定todo頁面
router.get('/:id/edit', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error("user not found")
      return Todo.findOne({
        where: {
          Id: req.params.id,
          UserId: req.user.id,
        }
      })
    })
    .then((todo) => { return res.render('edit', { todo: todo }) })
})

//修改特定todo
router.put('/:id', authenticated, (req, res) => {
  Todo.findOne({
    where: {
      Id: req.params.id,
      UserId: req.user.id,
    }
  })
    .then((todo) => {
      todo.name = req.body.name
      todo.done = req.body.done === "on"

      return todo.save()
    })
    .then((todo) => { return res.redirect(`/todos/${req.params.id}`) })
    .catch((error) => { return res.status(422).json(error) })
})

//刪除特定todo
router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error("user not found")

      return Todo.destroy({
        where: {
          UserId: req.user.id,
          Id: req.params.id
        }
      })
    })
    .then((todo) => { return res.redirect('/') })
    .catch((error) => { return res.status(422).json(error) })
})


module.exports = router