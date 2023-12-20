import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"

export default function MiddlewareAuth(req: Request, res: Response, next: NextFunction) {
    const bearerHeader = req.headers['authorization'];
    const signOptions = { maxAge: "365d" };

    if (bearerHeader) {
        try {
            const bearer = bearerHeader.split(' ');
            const token = bearer[1];
            const decoded = jwt.verify(token, "process.env.SECRET_KEY", signOptions) 
            req.authId = decoded.authId
            next();

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message,
                data: null,
            });
        }
    } else {

        return res.status(403).json({
            success: false,
            message: "Forbidden Access, Please Provide Your JWT Token",
            data: null,
        });
    }
}