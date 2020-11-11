const express = require("express");
const router = express.Router();
const Workout = require("../models/fitnessmodel");

router.get("/workouts", (req, res) => {
  Workout.find({}).sort({ date: -1 }).then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/workouts", (req, res) => {
  console.log("post");
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
});
router.put("/workouts/:id", function(req, res) {
  Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
router.get("/workouts/range", (req, res) => {
  Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
module.exports = router;
