const { Post } = require('../models/index');

const postController = {
  index: async (req, res) => {
    let result;
    try {
      let posts = await Post.findAll();
      result = { success: true, posts: posts };
      res.status(200).json(posts);
    } catch (err) {
      result = { success: false, msg: err };
      res.status(500).json(result);
    }
  },
};

module.exports = postController;
