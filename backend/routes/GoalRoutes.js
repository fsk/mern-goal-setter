const express = require('express');
const goalRouter = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controller/GoalController');
const { protect } = require('../middleware/AuthMiddleware');

goalRouter.get('/', protect, getGoals);

goalRouter.post('/', protect, setGoal);

goalRouter.put('/:id', protect, updateGoal);

goalRouter.delete('/:id', protect, deleteGoal);

module.exports = goalRouter;