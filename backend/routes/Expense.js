const express = require("express");
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/ExpenseController");
const router = express.Router();

router.get("/", getExpenses);

router.post("/", addExpense);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);

module.exports = router;
