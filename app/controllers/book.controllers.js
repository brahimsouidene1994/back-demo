const { where } = require('sequelize');
const book = require('../db/models/book');
const getAllBooks = async (req, res) => {
    console.log("getAllBooks")
    const allBooks = await book.findAll()
    res.status(200).json({
        data: allBooks
    });
}
const findBook = async (req, res) => {
    console.log("findBook", req.params)
    const { id } = req.params
    const bookFound = await book.findOne({ where: { id } });
    res.status(200).json({
        data: bookFound
    });
}

const updateBook = async (req, res) => {
    console.log("updateBook", req.params, req.body)
    const { id } = req.params
    const obj = req.body
    const updatedBook = await book.update(
        obj,
        {
            where: { id }
        }
        
    );
    res.status(200).json({
        data: updatedBook
    });
}

const deleteBook = async(req, res) => {
    console.log("deleteBook", req.params)
    const { id } = req.params

    const bookDeleted = book.destroy({
        where: {
            id
        },
        force: true
      });


    res.status(200).json({
        data: bookDeleted
    });
}

const insertBook = async(req, res) => {
    console.log("insertBook", req.body)
    const obj = req.body
    const instertedBook = book.create(obj);
    res.status(200).json({
        data: instertedBook
    });
}

module.exports = {
    getAllBooks,
    findBook,
    updateBook,
    deleteBook,
    insertBook
}