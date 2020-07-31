const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
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

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
// export Workout module 
module.exports = Workout;
