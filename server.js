const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
