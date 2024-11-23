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

export default {
    getProducts,
    addProduct,
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
