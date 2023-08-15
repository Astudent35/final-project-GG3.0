const Comment = require("../models/commentModel");
const asyncHandler = require('express-async-handler')

// Get all comments
const getComments = asyncHandler(async (req, res) => {
    try {
      const { videoID } = req.params;
      if (!videoID.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error(
          "Cannot find the product based on ID"
        );
      }
      const comments = await Comment.find({
        videoID,
      });
      if (comments.length === 0) {
        throw new Error(
          "Cannot find the product based on ID"
        );
      }
      const mappedComments = comments.map((item) => {
        return {
          username: item.username,
          comment: item.body,
          timestamp: {
            createdtAt: item.createdAt,
            updatedAt: item.updatedAt,
          },
        };
      });
      res.status(200).json(mappedComments);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })

// Create new comment
const createComment = asyncHandler(async (req, res) => {
    try {
      const { username, bodyComment, videoID } = req.body;
      const comment = new Comment({ username, body: bodyComment, videoID });
      await comment.save();
      res.status(200).json({
        success: true,
        fail: false,
      });
    } catch (err) {
      res.status(400).json({ success: false, fail: true });
    }
  })

module.exports = {
    getComments,
    createComment
}