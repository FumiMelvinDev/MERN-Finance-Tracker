const express = require("express");
const {
  getMe,
  loginUser,
  registerUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/user", protect, getMe);

router.post("/login", loginUser);

router.post("/", registerUser);

module.exports = router;
