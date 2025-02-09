import Book from '../db/models/Book';
import { Request, RequestHandler, Response } from 'express';
const getAllBooks:RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("getAllBooks")
    try {
        const allBooks = await Book.findAll()
        res.status(200).json({
            success: true,
            data: allBooks
        });

    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const findBook:RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("findBook", req.params)
    const { id } = req.params
    if (!id)
        res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
    try {
        const bookFound = await Book.findOne({ where: { id } });

        if (!bookFound)
            res.status(500).json({
                success: false,
                message: "Book Not Found!"
            })

        res.status(200).json({
            success: true,
            data: bookFound
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const updateBook:RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("updateBook", req.params, req.body)
    const { id } = req.params
    const obj = req.body
    if (!id)
        res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
    if (!obj)
        res.status(500).json({
            success: false,
            message: "Data To Update Not Provided"
        })
    try {
        const [updatedBook] = await Book.update(
            obj,
            {
                where: { id }
            }

        );
        if (!updatedBook)
            res.status(500).json({
                success: false,
                message: "Book Not Found"
            })
        res.status(200).json({
            success: true,
            message: "Book Updated successfully"
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const deleteBook:RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("deleteBook", req.params)
    const { id } = req.params
    if (!id)
        res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
    try {
        const bookDeleted =  await Book.destroy({
            where: {
                id
            },
            // force: true
        });

        if (!bookDeleted)
            res.status(500).json({
                success: false,
                message: "Book Not Found"
            })

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}

const insertBook:RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("insertBook", req.body)
    const obj = req.body
    if (!obj)
        res.status(500).json({
            success: false,
            message: "Data To Insert Not Provided"
        })
    try {
        const instertedBook = await Book.create(obj);
        res.status(200).json({
            success: true,
            message: "Book inserted successfully",
            data: instertedBook
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export default {
    getAllBooks,
    findBook,
    updateBook,
    deleteBook,
    insertBook
}