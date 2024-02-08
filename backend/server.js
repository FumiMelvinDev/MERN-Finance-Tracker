const express = require("express");
const { errHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/income", require("./routes/Income"));
app.use("/api/expense", require("./routes/Expense"));
app.use("/api/users", require("./routes/User"));

app.use(errHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
