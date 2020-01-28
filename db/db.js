const mysql2 = require('mysql2')
const util = require('util')
require('dotenv').config()
//database varaiable must be small letter and their properties
const mypool = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

query = util.promisify(mypool.query).bind(mypool)

const login = (username, password) => {
    if (username == null && password == null) {
        return
    }
    return query(`select * from user where username='${username}'`)

}

const addbook = BookRequestedValue => {
    const { title, author, publisher, numberPages } = BookRequestedValue
    return query(`INSERT INTO book(title,author,publisher,numberPages) VALUES (?,?,?,?)`, [title, author, publisher, numberPages])
}
const getAllBooks = _ => {
    return query(`SELECT * FROM book`)
}
const getBookById = id => {
    console.log("database id ", id)
    return query(`SELECT * FROM book WHERE id=${id}`)
}

module.exports = {
    login, addbook, getBookById, getAllBooks
}