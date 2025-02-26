import bookController from '../controllers/book.controllers.js'
import { Router } from 'express';
import verifyToken from '../middlewares/jwtVerify.js';
const router = Router();
router
    .route('/api/book/getAllBooks')
    .get(verifyToken, bookController.getAllBooks)
router
    .route('/api/book/findBook/:id')
    .get(verifyToken, bookController.findBook)
router
    .route('/api/book/updateBook/:id')
    .patch(verifyToken, bookController.updateBook)
router
    .route('/api/book/deleteBook/:id')
    .delete(verifyToken, bookController.deleteBook)
router
    .route('/api/book/insertBook')
    .post(verifyToken, bookController.insertBook)

export default router;