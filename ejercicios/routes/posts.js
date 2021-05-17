var express = require("express");
var router = express.Router();
const posts = require("../data/posts");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.redirect("posts/list");
});

//ADD comment
router.patch("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const newComment = { comment };
  const index = posts.findIndex((post) => post.id === +id);
  posts[index] = { ...posts[index], ...newComment };
  res.send(posts[index]);
});

//View List
router.get("/list", (req, res) => {
  console.log(this.posts);
  res.send(posts);
});

//Add
router.post("/add", (req, res) => {
  posts.push(req.body);
  res.send(posts);
});

//Edit
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const postInfo = req.body;
  const index = posts.findIndex((post) => post.id === +id);
  posts[index] = { ...posts[index], ...postInfo };
  res.send(posts[index]);
});

//Delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === +id);
  posts.splice(index, 1);
  res.send(posts);
});

module.exports = router;
