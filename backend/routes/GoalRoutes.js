const express = require('express');
const goalRouter = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controller/GoalController'); 

goalRouter.get('/', getGoals);

goalRouter.post('/', setGoal);

goalRouter.put('/:id', updateGoal);

goalRouter.delete('/:id', deleteGoal);

module.exports = goalRouter;