const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please add description"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Please add amount"],
      trim: true,
    },
    isIncome: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
