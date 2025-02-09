import { Request, RequestHandler, Response } from 'express';
import books from '../utilities/fake-data';
import Book from '../utilities/models/book.model';
const getAllBooks:RequestHandler = (req:Request, res:Response):void => {
    console.log("getAllBooks")
    try {
        res.status(200).json({
            success: true,
            data: books
        });

    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const findBook:RequestHandler  = (req: Request, res: Response):void => {
    const id = parseInt(req.params.id);
    const book = books.find((b) => b.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

const insertBook:RequestHandler  = (req: Request, res: Response):void => {
    const newBook: Book = {
        id: books.length + 1, // Generate a new ID
        ...req.body,
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

// Update a book by ID
const updateBook:RequestHandler  = (req: Request, res: Response):void => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === id);
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...req.body };
        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

// Delete a book by ID
const deleteBook:RequestHandler  = (req: Request, res: Response):void => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(200).json(books);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

export default {
    getAllBooks,
    findBook,
    updateBook,
    deleteBook,
    insertBook
}