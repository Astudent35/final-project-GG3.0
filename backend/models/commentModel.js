const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true,
    },
    // video id
    vId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema, "comments");