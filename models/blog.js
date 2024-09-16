const mongoose = require("mongoose");

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  writerEmail: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: String,
    default: () => formatDate(new Date()),
  },
});

const blogs = mongoose.model("blog", blogSchema);

module.exports = blogs;
