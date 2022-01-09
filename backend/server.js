import express from "express";
// import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;


// error catcher middleware, it catches errors and sends them to the frontend for proper evaluation
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use(express.json({ limit: "20mb", exended: true }));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/debarron", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});


 
const db = mongoose.connection;
db.once("open", () => {
  console.log("debarronDB connected Successfully");
})


// app.get("/api/products/:id", (req, res) => {
//   // const product = data.products[req.params.id]
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.status(200).send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });

// app.get("/api/products", async (req, res) => {
//   res.send(data.products);
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
  

app.get("/", (req, res) => {
  res.send("server is ready");
});
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}...`);
});

