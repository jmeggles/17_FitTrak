const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date.now,
    exercise: Array
  });

  const WorkoutSchema = new Schema({
  day: {
    type: Date.now,
  },
  exercise: [
    {
        // - type (type -> String)
        // - name (type -> String)
        // - duration (type -> Number)
        // - weight (type -> Number)
        // - reps (type -> Number)
        // - sets (type -> Number)
        // - distance (type -> Number)

      // this is an association
      type: Schema.Types.ObjectId,
      // reference key
      ref: "Book"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
// export Workout module (not libraries collection)
module.exports = Workout;
