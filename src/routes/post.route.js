const express = require("express");
const { createPost, getPosts, updatePost, deletePost } = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", createPost);
router.get("/getPosts", getPosts);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;