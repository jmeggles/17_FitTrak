// - Create all the routes to listen to the requests from the front end.
// - You will need at least Four (4) api routes:
const db = require("../models");
// const Workout = require("../models/Workout.js");

module.exports = (app) => {
  // - GET ( "/api/workouts" ) - Get all workouts
  //  - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // - GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page.
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // - POST ( "/api/workouts" ) - Create a new Workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // - PUT ( "/api/workouts/:id" ) - Update a Workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("workout id: ", params.id, "exercises: ", body);
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};