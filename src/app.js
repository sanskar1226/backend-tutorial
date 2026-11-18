const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

module.exports = app;