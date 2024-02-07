const express = require("express");
const { errHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/income", require("./routes/Income"));

app.use(errHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
