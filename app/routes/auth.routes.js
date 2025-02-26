import authController from '../controllers/auth.controllers.js';
import verifyToken from '../middlewares/jwtVerify.js';
import { Router } from 'express';
const router = Router();
router
    .route('/api/auth/signup')
    .post(authController.signup);
router
    .route('/api/auth/signin')
    .post(authController.signin);
router
    .route('/api/auth/verifySession')
    .get(verifyToken, authController.verifySession);

export default router;