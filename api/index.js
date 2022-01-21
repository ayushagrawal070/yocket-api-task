const mongoose = require("mongoose")
const express = require('express')
const dotenv = require("dotenv");
const Post = require("./models/Post");

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL)
    .then(console.log("database connected"))
    .catch(err => console.log(err));

//CREATE POST
app.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get All Posts
app.get("/", async (req, res) => {
    try {
        let posts;
        const numPosts = req.query.num;
        if (numPosts) {
            posts = await Post.find()
                .countDocuments()
                .then((total_posts) => {
                    if (numPosts > total_posts) {
                        res.status(400).send("Not enough Posts");
                    }
                    return Post.find().limit(Number(numPosts)).sort({ "createdAt": -1 });
                });
        } else {
            posts = await Post.find().sort({ "createdAt": -1 });
        }
        // console.log(posts);
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


app.listen(port, () => console.log(`listening on local host: ${port}`));