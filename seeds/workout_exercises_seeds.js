const { WorkoutExercises } = require('../models');

const workoutExercisesData = [
  {
    repetitions: 1, 
    sets: 1, 
    weight: 110,
    time: 10,
  },
  {
    repetitions: 2, 
    sets: 2, 
    weight: 120,
    time: 8,
  },
  {
    repetitions: 3, 
    sets: 3, 
    weight: 130,
    time: 10,
  },
  {
    repetitions: 4, 
    sets: 4, 
    weight: 140,
    time: 20,
  },
];

const seedworkoutExercise = () => WorkoutExercises.bulkCreate(workoutExercisesData);

module.exports = seedworkoutExercise;