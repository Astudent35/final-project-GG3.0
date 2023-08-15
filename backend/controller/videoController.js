const asyncHandler = require('express-async-handler')
const Video = require("../models/videoModel");

const getVideos = asyncHandler(async (req, res) => {
    try {
        const videos = await Video.find();
        if (videos.length === 0) {
        res.status(200).json({
            message: "Belum ada video",
        });
        return;
        }
        const mappedVideos = videos.map((item) => {
        return {
            videoID: item._id,
            url_thumbnail: item.url_thumbnail,
        };
        });
        res.status(200).json(mappedVideos);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    })

const createVideo = asyncHandler( async (req, res) => {
        try {
        const { url_thumbnail, url_yt } = req.body;
        const video = new Video({ url_thumbnail, url_yt });
        await video.save();
        res.status(200).json({
            success: true,
            fail: false,
        });
        } catch (error) {
        res.status(400).json({ success: false, fail: true });
        }
    })

module.exports = {
    getVideos,
    createVideo
};
