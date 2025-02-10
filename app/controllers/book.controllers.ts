import Book from '../db/models/Book';
import { Request, RequestHandler, Response } from 'express';
const getAllBooks: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    console.log("getAllBooks")
    try {
        const allBooks: Book[] = await Book.findAll()
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

const findBook: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    console.log("findBook", req.params)
    const { id } = req.params
    if (!id) {
        res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
        return;
    }
    try {
        const bookFound: Book | null = await Book.findOne({ where: { id } });

        if (!bookFound) {
            res.status(500).json({
                success: false,
                message: "Book Not Found!"
            })
            return;
        }

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

const updateBook: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    console.log("updateBook", req.params, req.body)
    const { id } = req.params
    const obj: Partial<Book> = req.body
    if (!id) {
        res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
        return;
    }
    if (!obj) {
        res.status(500).json({
            success: false,
            message: "Data To Update Not Provided"
        })
        return;
    }
    try {
        const [updatedBook]: number[] = await Book.update(
            obj,
            {
                where: { id }
            }
        );
        if (!updatedBook) {
            res.status(500).json({
                success: false,
                message: "Book Not Found"
            })
            return;
        }
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

const deleteBook: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    console.log("deleteBook", req.params)
    const { id } = req.params
    if (!id) {
        res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
        return;
    }
    try {
        const bookDeleted: number = await Book.destroy({
            where: {
                id
            },
            // force: true
        });

        if (!bookDeleted) {
            res.status(500).json({
                success: false,
                message: "Book Not Found"
            })
            return;
        }

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

const insertBook: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    console.log("insertBook", req.body)
    const obj: Partial<Book> = req.body
    if (!obj) {
        res.status(500).json({
            success: false,
            message: "Data To Insert Not Provided"
        })
        return;
    }
    if (obj.id) {
        res.status(500).json({
            success: false,
            message: "Id Book Not Allowed"
        })
        return;  // stop further execution if id is provided in the request body.
    }
    try {
        const instertedBook: Book = await Book.create(obj);
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