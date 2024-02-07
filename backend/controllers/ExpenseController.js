const asyncHandler = require("express-async-handler");
const Expense = require("../models/ExpenseModel");

// @desc Get all Expense
// @route GET api/expense
// @access Private
getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find();
  res.status(200).json(expenses);
});

// @desc Add Expense
// @route POST api/expense
// @access Private
addExpense = asyncHandler(async (req, res) => {
  const { description, amount } = req.body;
  if (!description || !amount) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const expense = await Expense.create({
    description,
    amount,
  });

  res.status(200).json(expense);
});

// @desc Update Expense
// @route PUT api/expense/:id
// @access Private
updateExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(400);
    throw new Error("Expense not found");
  }

  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedExpense);
});

// @desc Delete Expense
// @route DELETE api/expense/:id
// @access Private
deleteExpense = asyncHandler(async (req, res) => {
  await Expense.findByIdAndDelete({ id: req.params.id });

  if (!req.params.id) {
    res.status(400);
    throw new Error("Expense not found");
  }
  res.status(200).json(req.params.id);
});

module.exports = {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
};
