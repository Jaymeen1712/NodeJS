const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const courses = [
  {
    id: 1,
    course: 1,
  },
  {
    id: 2,
    course: 2,
  },
  {
    id: 3,
    course: 3,
  },
];

app.listen(port, () => {
  console.log("Server listening on port", port);
});

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course)
    res.status(404).send("The course with the given id was not found.");
  res.send(course);
});
