const asyncHandler = require('express-async-handler');

const Goal = require('../models/GoalModel');

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find();

    res.status(200).json(goals);
})

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.goal) {
        res.status(400);
        throw new Error('Please add a goal field');
    }

    const goal = await Goal.create({
        goal: req.body.goal
    });

    res.status(200).json(goal);
})

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler( async (req, res) => {

    const id = req.params.id;
    const newGoal = req.body
    const existGoal = await Goal.findById(id);

    if(!existGoal) {
        res.status(400)
        throw new Error('Goal Not Foud');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(id, newGoal, {new: true});

    res.status(200).json(updatedGoal);
})

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler( async (req, res) => {

    const id = req.params.id;
    const existGoal = await Goal.findById(id);

    if(!existGoal) {
        res.status(400)
        throw new Error('Goal Not Foud');
    }

    await Goal.remove()

    res.status(200).json({message: "Goal deleted"});

})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}