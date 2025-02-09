import authServices from '../controllers/auth.controllers'
import { Router } from 'express'

const router = Router()
router
    .route('/api/auth/signup')
    .post(authServices.signup);
router
    .route('/api/auth/signin')
    .post(authServices.signin);

export default router;