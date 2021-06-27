const { Post } = require('../models/index');

const postController = {
  create: async (req, res) => {
    let result, post;
    try {
      post = await Post.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId,
      });
      result = {
        success: true,
        msg: 'Publicación creada',
        post: post,
      };
      res.status(201).json(result);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
  list: async (req, res) => {
    let result, posts;
    try {
      posts = await Post.findAll();
      result = { success: true, posts: posts };
      res.status(200).json(posts);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
  show: async (req, res) => {
    let result, post;
    try {
      post = await Post.findByPk(req.params.id);
      if (!post) {
        result = { success: false, msg: 'No se encontró la publicación' };
        return res.status(404).json(result);
      }
      result = { success: true, post: post };
      res.status(200).json(result);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
  update: async (req, res) => {
    let result, post;
    try {
      post = await Post.findByPk(req.params.id);
      if (!post) {
        result = { success: false, msg: 'No se encontró la publicación' };
        return res.status(404).json(result);
      }
      post.title = req.body.title;
      post.body = req.body.body;
      post = await post.save();
      result = { success: true, post: post };
      res.status(200).json(result);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
  delete: async (req, res) => {
    let result, post;
    try {
      post = await Post.findByPk(req.params.id);
      if (!post) {
        result = { success: false, msg: 'No se encontró la publicación' };
        return res.status(404).json(result);
      }
      post.destroy();
      result = { success: true, msg: 'La publicación ha sido eliminada' };
      res.status(200).json(result);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
};

module.exports = postController;
