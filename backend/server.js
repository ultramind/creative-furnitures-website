import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/usersRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import dbConnect from "./db/connect.js";

const app = express();
dotenv.config();
app.use(express.json());
// setting express to use cors
app.use(cors());

// routes
app.use("/api/seed/", seedRouter);
app.use("/api/products/", productRouter);
app.use("/api/user/", userRouter);
app.use("/api/orders/", orderRouter);

// error handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// home route
app.get("/", (req, res) => {
  res.send("Welcome to the furniture app");
});
app.get("/", (req, res) => {
  res.send("Welcome to the furniture app");
});

const port = process.env.PORT || 8000;

// server listing at port
app.listen(port, () => {
  console.log(`Server up and runing on port: ${port}`);
  dbConnect();
});
