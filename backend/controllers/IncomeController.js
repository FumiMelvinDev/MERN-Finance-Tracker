const asyncHandler = require("express-async-handler");

// @desc Get all Income
// @route GET api/income
// @access Private
getIncomes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get income" });
});

// @desc Add Income
// @route POST api/income
// @access Private
addIncome = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "add income" });
});

// @desc Update Income
// @route PUT api/income/:id
// @access Private
updateIncome = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update income" });
});

// @desc Delete Income
// @route DELETE api/income/:id
// @access Private
deleteIncome = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete income" });
});

module.exports = {
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
};
