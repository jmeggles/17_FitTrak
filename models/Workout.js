const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercise: [
    {
      // - type (type -> String)
      type: {
        type: String,
        required: true
      },
      // - name (type -> String)
      name: {
        type: String,
        required: true
      },
      // - duration (type -> Number)
      duration: {
        type: Number,
        required: true
      },
      // - weight (type -> Number)
      weight: {
        type: Number,
      },
      // - reps (type -> Number)
      reps: {
        type: Number,
      },
      // - sets (type -> Number)
      sets: {
        type: Number,
      },
      // - distance (type -> Number)
      distance: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
// export Workout module (not libraries collection)
module.exports = Workout;
