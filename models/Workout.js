const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date.now,
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
        type: Number
      },
      // - duration (type -> Number)
      // - weight (type -> Number)
      // - reps (type -> Number)
      // - sets (type -> Number)
      // - distance (type -> Number)


    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
// export Workout module (not libraries collection)
module.exports = Workout;
