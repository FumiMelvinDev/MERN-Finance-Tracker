const asyncHandler = require("express-async-handler");
const Income = require("../models/IncomeModel");

// @desc Get all Income
// @route GET api/income
// @access Private
getIncomes = asyncHandler(async (req, res) => {
  const incomes = await Income.find();
  res.status(200).json(incomes);
});

// @desc Add Income
// @route POST api/income
// @access Private
addIncome = asyncHandler(async (req, res) => {
  const { description, amount } = req.body;
  if (!description || !amount) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const income = await Income.create({
    description,
    amount,
  });

  res.status(200).json(income);
});

// @desc Update Income
// @route PUT api/income/:id
// @access Private
updateIncome = asyncHandler(async (req, res) => {
  const income = await Income.findById(req.params.id);

  if (!income) {
    res.status(400);
    throw new Error("Income not found");
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
deleteIncome = asyncHandler(async (req, res) => {
  await Income.findByIdAndDelete({ id: req.params.id });

  if (!req.params.id) {
    res.status(400);
    throw new Error("Income not found");
  }
  res.status(200).json(req.params.id);
});

module.exports = {
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
};
