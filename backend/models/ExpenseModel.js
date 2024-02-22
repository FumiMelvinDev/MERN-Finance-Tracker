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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
