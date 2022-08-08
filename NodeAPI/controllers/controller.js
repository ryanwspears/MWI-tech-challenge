const Post = require("../models/model");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { first_name, last_name, title, email, message } = req.body;

    let post = new Post(first_name, last_name, title, email, message);

    await post.save();

    console.log(first_name);

    res.status(201).json({ message: "Post created" });
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    next(error);
  }
};