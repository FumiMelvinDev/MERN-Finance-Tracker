const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema(
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
      default: true,
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

module.exports = mongoose.model("Income", incomeSchema);
