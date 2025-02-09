import bookServices from '../controllers/book.controllers'
import { Router } from 'express'
import middlers from '../middlewares/jwtVerify'

const router = Router()

router
    .route('/api/book/getAllBooks')
    .get(middlers.verifyToken, bookServices.getAllBooks)
router
    .route('/api/book/findBook/:id')
    .get(middlers.verifyToken, bookServices.findBook)
router
    .route('/api/book/updateBook/:id')
    .patch(middlers.verifyToken, bookServices.updateBook)
router
    .route('/api/book/deleteBook/:id')
    .delete(middlers.verifyToken, bookServices.deleteBook)
router
    .route('/api/book/insertBook')
    .post(middlers.verifyToken, bookServices.insertBook)
export default router;