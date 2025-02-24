const {
    signup,
    signin,
    verifySession
} = require('../controllers/auth.controllers');
const verifyToken = require('../middlewares/jwtVerify');

const router = require('express').Router();

router
    .route('/api/auth/signup')
    .post(signup);
router
    .route('/api/auth/signin')
    .post(signin);
router
    .route('/api/auth/verifySession')
    .get(verifyToken, verifySession);
module.exports = router;