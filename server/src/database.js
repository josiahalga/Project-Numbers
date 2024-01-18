import mysql from "mysql2/promise"
import dotenv from 'dotenv'

dotenv.config()

const pool = await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

async function getMembers() { // eslint-disable-line no-unused-vars
    const [rows] = await pool.query("SELECT * FROM members")
    return rows
}

async function getMember(id) { // eslint-disable-line no-unused-vars
    const [rows] = await pool.query(`
    SELECT *
    FROM members
    WHERE member_id = ?
    `, [id])
    return rows
}


export default {getMembers, getMember}