const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("connected to MongoDB...");
  } catch (error) {
    console.log("could not connected to MongoDB", error);
  }
}

main();
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
// this is a class
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    //name: "Angularjs",
    author: "mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function getCourse() {
  const courses = await Course.find();
  console.log(courses);
}

createCourse();
