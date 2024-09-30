import { Request, Response, nextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const authmiddleware = (req: Request, res: Response, next: nextFunction) => {
    const token = res.header('Authorization')?.split('')[1]
    if (!token) {
        return res.status(401).send({ message: 'Access denied. No token provided.' });
    }
    try {
        var decoded = jwt.verify(token, process.env.SECRET_KEY!)
            (req as any).user = decoded;
        next()
    } catch (error) {
        res.status(500).json({ error: 'Invalid token' })
    }
}