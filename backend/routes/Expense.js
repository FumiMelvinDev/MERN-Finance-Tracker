const express = require("express");
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/ExpenseController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getExpenses);

router.post("/", protect, addExpense);

router.put("/:id", protect, updateExpense);

router.delete("/:id", protect, deleteExpense);

module.exports = router;
