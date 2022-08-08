const express = require("express");
const Controllers = require("../controllers/controller");
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").get(Controllers.getAllPosts);
router.route("/").post(Controllers.createNewPost);
router.route("/:id").get(Controllers.getPostById);

module.exports = router;