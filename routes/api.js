const router = require("express").Router();
const Exercise = require("../models/workout.js");

router.post("/api/workout", ({ body }, res) => {
  workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercise/range", ({ body }, res) => {
  workout.insertMany(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
  Exercise.find({})
    .sort({ day: -1 })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
