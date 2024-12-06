import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'ecommerce',
});

// Products Page
const getProducts = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM products');
        response.status(200).json({
            code: 200,
            message: "Success",
            data: results.rows
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}

const addProduct = async (request, response) => {
    try {
        const { name, price, stock_quantity, category_id } = request.body;
        const query = {
            text: `INSERT INTO products (name, price, stock_quantity, category_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            values: [name, price, stock_quantity, category_id]
        }

        const results = await pool.query(query);
        response.status(201).json({
            code: 201,
            message: "Product created",
            data: results.rows[0]
        });
    } catch (error) {
        console.error(error);
        response.status(400).json({ message: 'Bad Request' });
    }
}

const deleteProduct = async (request, response) => {
    try {
        const { product_id } = request.params;
        const deleteQuery = {
            text: `DELETE FROM products WHERE product_id = $1 RETURNING *`,
            values: [product_id]
        };

        const results = await pool.query(deleteQuery);
        if (results.rowCount === 0) {
            response.status(404).json({ message: 'Product not found' });
        } else {
            response.status(200).json({
                code: 200,
                message: "Product deleted",
                data: results.rows[0]
            });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};

// Cart Page
const getCartProducts = async (request, response) => {
    try {
        const query = {
            text: `SELECT c.cart_id, p.product_id, p.name, p.price, p.category, p.description, c.quantity
                    FROM cart c
                    LEFT JOIN products p ON c.product_id = p.product_id`,
        };

        const results = await pool.query(query);
        if (results.rowCount === 0) {
            response.status(404).json({ message: 'Cart is empty' });
        } else {
            response.status(200).json({
                code: 200,
                message: "Cart products",
                data: results.rows
            });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};

const addToCart = async (request, response) => {
    try {
        const { product_id, quantity } = request.body;
        const query = {
            text: `INSERT INTO cart (product_id, quantity) VALUES ($1, $2) RETURNING *`,
            values: [product_id, quantity],
        };

        const results = await pool.query(query);
        response.status(201).json({
            code: 201,
            message: "Product added to cart",
            data: results.rows[0],
        });
    } catch (error) {
        console.error(error);
        response.status(400).json({ message: 'Bad Request' });
    }
};

const deleteFromCart = async (request, response) => {
    try {
        const { cart_id } = request.params;
        const deleteQuery = {
            text: `DELETE FROM cart WHERE cart_id = $1 RETURNING *`,
            values: [cart_id]
        };

        const results = await pool.query(deleteQuery);
        if (results.rowCount === 0) {
            response.status(404).json({ message: 'Cart item not found' });
        } else {
            response.status(200).json({
                code: 200,
                message: "Item deleted from cart",
                data: results.rows[0]
            });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};

export default {
    // Product Page
    getProducts,
    addProduct,
    deleteProduct,

    // Cart Page
    getCartProducts,
    addToCart,
    deleteFromCart
}

