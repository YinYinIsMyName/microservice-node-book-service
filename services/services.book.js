const { db } = require('../db')

const addbook = BookRequestedInput =>{
    return db.addbook(BookRequestedInput)
}

const getBookById = id =>{
    console.log(id)
     return db.getBookById(id)
}
const getAllBooks = _ =>{
    return db.getAllBooks()
}
module.exports ={
    addbook,getBookById,getAllBooks

}