const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  excercises: {
    type: String,
    trim: true,
    required: "Enter an exercise type"
  },

  name: {
    type: String,
    trim: true,
    required: "Enter exercise name"
  },

  duration: {
    type: String,
    required: "Enter duration in minutes"
  },
  weight: {
      type: Number
  },
  reps: {
      type: Number
  },
  sets: {
      type: Number
  },
  distance: {
      type: Number
  },
  
});

fitnessSchema.virtual("totalDuration").get(function() {
    return this.excercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("User", fitnessSchema);

module.exports = User;
