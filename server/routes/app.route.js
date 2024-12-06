import postgres from '../db/postgres.js'
import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
    postgres.query('select * from products', (err, res) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(res.rows);
        }
    })
})