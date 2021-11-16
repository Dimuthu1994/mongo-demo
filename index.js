const mongoose = require("mongoose");

main();
createCourse();

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("connected to MongoDB...");
  } catch (error) {
    console.log("could not connected to MongoDB", error);
  }
}

async function createCourse() {
  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
  });
  // this is a class
  const Course = mongoose.model("Course", courseSchema);
  const course = new Course({
    name: "Angularjs",
    author: "mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}
