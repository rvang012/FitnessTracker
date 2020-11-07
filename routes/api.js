var db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    app.post("/api/workouts", async (req, res) => {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error", err)
        }
    })
    app.put("/api/workout/:id", ({body, params}, res) => {
        const workoutId = params.id;
        let savedWorkouts = [];
        db.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercises = (dbWorkout[0].exercise);
            let allExercises = [...savedWorkouts, body]
            updateWorkout(allExercises)
        })
        .catch(err => {
            res.json(err);
        });
        function updateWorkout(exercise){
            db.Workout.findByIdandUpdate(workoutId, {exercise: exercise}, function(err, doc){
                if(err){
                    console.log(err)
                }
            })
        }
    })
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
}