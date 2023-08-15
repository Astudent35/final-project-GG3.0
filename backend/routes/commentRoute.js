const express = require("express");
const router = express.Router();
const { getComments, createComment } = require("../controller/commentController");

router.get("/:vId", getComments);
router.post("/", createComment);

module.exports = router;