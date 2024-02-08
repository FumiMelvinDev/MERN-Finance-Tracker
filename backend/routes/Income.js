const express = require("express");
const {
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome,
} = require("../controllers/IncomeController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getIncomes);

router.post("/", protect, addIncome);

router.put("/:id", protect, updateIncome);

router.delete("/:id", protect, deleteIncome);

module.exports = router;
