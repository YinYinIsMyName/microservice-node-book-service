const { BookService } = require('../services')
const response = require('../model/response')

const addBook = (req, res) => {

    const BookRequestedInputValue = {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        numberPages: req.body.numberPages
    }
    BookService.addbook(BookRequestedInputValue).then(data => {
        if (data.length == 0) {
            res.json(response({ message: "no data to be displayed", success: false }))
        }
        res.json(response({ success: true, payload: null }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })

}

const getBookById = (req, res) => {
    //query string /getbooks?id=1
    const id = req.query.id
    return BookService.getBookById(id).then(data => {
        data.length == 0 ? res.json(response({ message: "no data to be displayed", success: false }))
            :
            res.json(response({ success: true, payload: data }))
    })
        .catch(err => {
            res.json(response({ message: err, success: false }))
        })
}

const getAllBooks = (req, res) => {
    return BookService.getAllBooks().then(data => {
        res.json(response({ success: true, payload: data }))
    })
        .catch(err => {
            res.json({ message: err, success: false })
        })
}

module.exports = {
    addBook, getBookById, getAllBooks
}