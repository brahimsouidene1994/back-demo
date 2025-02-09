import { NextFunction, Request, RequestHandler, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface AuthRequest extends Request {
    userId?: string;
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    console.log('verifyToken')
    const authheader = req.headers["authorization"];
    if (!authheader || !authheader.startsWith("Bearer ")) {
        res.status(401).send({
            success: false,
            message: "Token is required"
        });
    }
    const token = authheader!.split(" ")[1];
    verify(token, "demo-secret", (err, response) => {
        if (err || !response || typeof response !== 'object' || !('id' in response)) {
            return res.status(401).json({
                success: false,
                message: "Token is not authorized"
            });
        }
        (req as AuthRequest).userId = response!.id;
        next()
    })
};

export default { verifyToken };