const express = require("express");
const {
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
} = require("../controllers/IncomeController");
const router = express.Router();

router.get("/", getIncomes);

router.post("/", addIncome);

router.put("/:id", updateIncome);

router.delete("/:id", deleteIncome);

module.exports = router;
