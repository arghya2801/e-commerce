import express from "express";
import postgres from "./db/postgres.js"
// import { getProducts, addProduct, deleteProduct, getCartProducts, addToCart, deleteFromCart } from './db/postgres.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})

console.log(postgres.getProducts);
app.get("/products", postgres.getProducts);
app.post("/products", postgres.addProduct);
app.delete("/products", postgres.deleteProduct);
app.get("/cart", postgres.getCartProducts);
app.post("/cart", postgres.addToCart);
app.delete("/cart", postgres.deleteFromCart);

// app.get("/products", getProducts);
// app.post("/products", addProduct);
// app.delete("/products/:id", deleteProduct);
// app.get("/cart", getCartProducts);
// app.post("/cart", addToCart);
// app.delete("/cart/:id", deleteFromCart);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})