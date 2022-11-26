import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

interface JwtPayload {
  id: string;
}

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

      req.user = await User.findById(decoded.id).select(
        "-password -confirmed -token -createdAt -updatedAt -__v"
      );
      console.log(req.user);
    } catch (error) {
      return res.status(404).json({ msg: "Error" });
    }
  }

  if (!token) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
