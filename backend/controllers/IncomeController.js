const asyncHandler = require("express-async-handler");
const Income = require("../models/IncomeModel");
const User = require("../models/UserModel");

// @desc Get all Income
// @route GET api/income
// @access Private
const getIncomes = asyncHandler(async (req, res) => {
  const incomes = await Income.find({ user: req.user.id });
  res.status(200).json(incomes);
});

// @desc Add Income
// @route POST api/income
// @access Private
const addIncome = asyncHandler(async (req, res) => {
  const { description, amount } = req.body;

  if (!description || !amount) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const income = await Income.create({
    description,
    amount,
    user: req.user.id,
  });

  res.status(200).json(income);
});

// @desc Update Income
// @route PUT api/income/:id
// @access Private
const updateIncome = asyncHandler(async (req, res) => {
  const income = await Income.findById(req.params.id);

  if (!income) {
    res.status(400);
    throw new Error("Income not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (income.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  const updatedIncome = await Income.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedIncome);
});

// @desc Delete Income
// @route DELETE api/income/:id
// @access Private
const deleteIncome = asyncHandler(async (req, res) => {
  const income = await Income.findByIdAndDelete({ id: req.params.id });

  if (!req.params.id) {
    res.status(400);
    throw new Error("Income not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (income.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  res.status(200).json(req.params.id);
});

module.exports = {
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
};
