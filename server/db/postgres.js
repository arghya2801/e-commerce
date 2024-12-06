import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    // user: 'postgres',
    // host: 'localhost',
    // database: 'nama_db_kamu',
    // password: 'password_kamu',
    // port: 5432
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'ecommerce',
});

// Products Page
const getProducts = (request, response) => {
    try {
        pool.query('SELECT * FROM products', (error, results) => {
            if (error) {
                throw error
            }

            response.status(200).json({
                code: 200,
                message: "Success",
                data: results.rows
            });
        })
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}

const addProduct = (request, response) => {
    try {
        const { name, price, stock_quantity, category_id } = request.body;
        const query = {
            text: `INSERT INTO products (name, price, stock_quantity, category_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            values: [name, price, stock_quantity, category_id]
        }

        pool.query(query, (error, results) => {
            if (error) {
                throw error
            }

            response.status(201).json({
                code: 201,
                message: "Product created",
                data: {
                    product_id: results.rows[0].product_id,
                    name: results.rows[0].name,
                    price: results.rows[0].price,
                    stock_quantity: results.rows[0].stock_quantity,
                    category_id: results.rows[0].category_id,
                }
            });
        })
    } catch (error) {
        console.error(error);
        response.status(400).json({ message: 'Bad Request' });
    }
}

const deleteProduct = (request, response) => {
    try {
        const { product_id } = request.params;
        const deleteQuery = {
            text: `DELETE FROM products WHERE product_id = $1 RETURNING *`,
            values: [product_id]
        };

        pool.query(deleteQuery, (error, results) => {
            if (error) {
                throw error;
            }

            if (results.rowCount === 0) {
                response.status(404).json({ message: 'Product not found' });
            } else {
                response.status(200).json({
                    code: 200,
                    message: "Product deleted",
                    data: results.rows[0]
                });
            }
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};


// Cart Page
const getCartProducts = (request, response) => {
    try {
        const query = {
            text: `SELECT c.cart_id, p.product_id, p.name, p.price, p.category, p.description, c.quantity
                    FROM cart c
                    LEFT JOIN products p ON c.product_id = p.product_id`,
        };

        pool.query(query, (error, results) => {
            if (error) {
                throw error;
            }

            if (results.rowCount === 0) {
                response.status(404).json({ message: 'Cart is empty' });
            } else {
                response.status(200).json({
                    code: 200,
                    message: "Cart products",
                    data: results.rows
                });
            }
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};

const addToCart = (request, response) => {
    try {
        const { product_id, quantity } = request.body;

        // Add the product to cart in the database
        const query = {
            text: `INSERT INTO cart (product_id, quantity) VALUES ($1, $2) RETURNING *`,
            values: [product_id, quantity],
        };

        pool.query(query, (error, results) => {
            if (error) {
                throw error;
            }

            response.status(201).json({
                code: 201,
                message: "Product added to cart",
                data: results.rows[0],
            });
        });
    } catch (error) {
        console.error(error);
        response.status(400).json({ message: 'Bad Request' });
    }
};

const deleteFromCart = (request, response) => {
    try {
        const { cart_id } = request.params;
        const deleteQuery = {
            text: `DELETE FROM cart WHERE cart_id = $1 RETURNING *`,
            values: [cart_id]
        };

        pool.query(deleteQuery, (error, results) => {
            if (error) {
                throw error;
            }

            if (results.rowCount === 0) {
                response.status(404).json({ message: 'Cart item not found' });
            } else {
                response.status(200).json({
                    code: 200,
                    message: "Item deleted from cart",
                    data: results.rows[0]
                });
            }
        });
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


// const client = new pg.Client({
// })

// export const query = (text, params, callback) => {
//     return pool.query(text, params, callback)
// }

// client.connect();
// client.query('select * from products', (err, res) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(res.rows);
//     }
//     client.end();     
// })
