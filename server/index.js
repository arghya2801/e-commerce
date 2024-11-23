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


app.get("/products", postgres.getProducts);
app.post("/products", postgres.addProduct);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})