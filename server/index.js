import express from "express";
import postgres from "./db/postgres.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})

// console.log(postgres.getProducts);
app.get("http://localhost:3000/products", postgres.getProducts);
app.post("http://localhost:3000/products", postgres.addProduct);
app.post("http://localhost:3000/products", postgres.deleteProduct);
app.get("http://localhost:3000/cart", postgres.getCartProducts);
app.post("http://localhost:3000/cart", postgres.addToCart);
app.post("http://localhost:3000/cart", postgres.deleteFromCart);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})