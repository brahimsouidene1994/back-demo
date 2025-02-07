import fakeBookServices from '../controllers/fakeBook.controllers'
import { Router } from 'express'

const router = Router()

router
    .route('/api/book/getAllBooks')
    .get(fakeBookServices.getAllBooks)
router
    .route('/api/book/findBook/:id')
    .get(fakeBookServices.findBook)
router
    .route('/api/book/updateBook/:id')
    .patch(fakeBookServices.updateBook)
router
    .route('/api/book/deleteBook/:id')
    .delete(fakeBookServices.deleteBook)
router
    .route('/api/book/insertBook')
    .post(fakeBookServices.insertBook)
export default router;