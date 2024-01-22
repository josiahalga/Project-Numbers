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

async function createMember(last_name, suffix, first_name, middle_name, birthdate, status, occupation, sex, blood_type, street_address, barangay, city, cell_no, landline, email_address, fb_username, baptism_status, deceased, auxiliary) {
    const [result] = await pool.query(`
    INSERT INTO members (last_name, suffix, first_name, middle_name, birthdate, status, occupation, sex, blood_type, street_address, barangay, city, cell_no, landline, email_address, fb_username, baptism_status, deceased, auxiliary)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `, [last_name, suffix, first_name, middle_name, birthdate, status, occupation, sex, blood_type, street_address, barangay, city, cell_no, landline, email_address, fb_username, baptism_status, deceased, auxiliary])
    const id = result.insertId
    return getMember(id)
}


export default {getMembers, getMember, createMember}