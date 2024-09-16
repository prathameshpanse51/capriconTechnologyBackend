const express = require("express");
const app = express();

const connectDB = require("./db.js");
connectDB();

const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const adminLogin = require("./models/admin.js");
const blogs = require("./models/blog.js");

app.get("/adminlogin", async (req, res) => {
  const adminData = await adminLogin.findById("66ad751de18fc4c24a41c2b0");
  res.json({ user: adminData.username, pass: adminData.password });
});

app.post("/addblog", async (req, res) => {
  const newBlog = new blogs(req.body);
  await newBlog.save();
});

app.get("/blogslist", async (req, res) => {
  const blogslist = await blogs.find({});
  res.json(blogslist);
});

app.put("/updateblog", async (req, res) => {
  const id = await blogs.findByIdAndUpdate(
    req.body["id"],
    {
      status: req.body["status"],
      comment: req.body["comment"],
    },
    {
      new: true,
      runValidators: true,
    }
  );
});

app.listen(3000, () => {
  console.log("App is running!");
});
