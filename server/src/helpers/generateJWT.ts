import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const generateJWT = (id: Types.ObjectId) => {
  return jwt.sign({ id }, <string>process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateJWT;
