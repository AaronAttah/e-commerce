import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModels.js";

const productRouter = express.Router();

// this is for the products at homepage
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(201).send(products);
    res.send("time")
    // console.log(products)
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove was usefd to reupdate the inserted api else it will throw out duplicate error
    await User.remove({})
    const createdProducts = await Product.insertMany(data.products);
    res.status(201).send({ products: createdProducts });
  })
);


// where this is for the detailsproducts
productRouter.get(
    "/:id",
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      console.log(product);
      if(product) {
        res.send(product);
      }else{
          res.status(404).send({message: 'Product Not Found !!!!'})
      }

    })
  );
  

export default productRouter;
