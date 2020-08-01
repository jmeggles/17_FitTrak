const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// - day (type -> Date)
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  // - exercises (type -> Array)
  // Each object inside the "exercises" property will have the following properties:
  exercise: [
    {
      // - type (type -> String)
      type: {
        type: String,
        required: true,
        trim: true
      },
      // - name (type -> String)
      name: {
        type: String,
        required: true,
        trim: true
      },
      // - duration (type -> Number)
      duration: {
        type: Number,
        required: true,
        trim: true
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

// - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
// export Workout module 
module.exports = Workout;
