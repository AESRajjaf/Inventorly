import jwt from "jsonwebtoken"
import { Types } from "mongoose";

const generateJWT = (id: Types.ObjectId) => {
    return jwt.sign( { id }, <string>process.env.JWT_TOKEN, {
        expiresIn: '2d',
    });
};

export default generateJWT;