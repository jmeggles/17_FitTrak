// - Create all the routes to listen to the requests from the front end.
// - You will need at least Four (4) api routes:

// module.exports = function(app){
//     app.get("/", function(req, res){

//     })
// }

const router = require('express').Router();


// /api/workouts
router.get("/", function(req, res){

})

// /api/workouts/range
router.get("/range", function(req, res){

})

module.exports = router;


    // - GET ( "/api/workouts" ) - Get all workouts
        // - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.





    // - GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page.


    


    // - POST ( "/api/workouts" ) - Create a new Workout





    // - PUT ( "/api/workouts/:id" ) - Update a Workout