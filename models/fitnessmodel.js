const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "excercise field cannot be blank"
        },
        name:{
            type: String,
            required: "enter a name for exercise"
        },
        distance: {
            type: Number,
        },
        duration:{
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }
] 
},
{
  toJSON: {
    virtuals: true
  }
}
);

fitnessSchema.virtual("totalDuration").get(function() {
    return this.excercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
fitnessSchema.virtual("totalDistance").get(function() {
  return this.exercises.reduce((total, exercise) => {
      return total + exercise.distance;
  }, 0);
});
const Workout = mongoose.model("workout", fitnessSchema);

module.exports = Workout;
