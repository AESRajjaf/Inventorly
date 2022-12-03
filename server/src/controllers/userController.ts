import User from "../models/User";
import { Request, Response } from "express";

import generateID from "../helpers/generateID";
import generateJWT from "../helpers/generateJWT";

const register = async (req: Request, res: Response) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("Correo electrónico ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    user.token = generateID();
    await user.save();
    // TO DO: enviar email de confirmacion !
    res.json({
      msg: "Cuenta creada correctamente, revise su correo electrónico para confirmar su cuenta",
    });
  } catch (error) {
    console.log(error);
  }
};

const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Usuario no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (!user.confirmed) {
    const error = new Error(
      "Necesita confirmar su cuenta para poder iniciar sesión"
    );
    return res.status(403).json({ msg: error.message });
  }

  if (await user.checkPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
      admin: user.admin
    });
  } else {
    const error = new Error("Contraseña incorrecta");
    return res.status(403).json({ msg: error.message });
  }
};

const confirmAccount = async (req: Request, res: Response) => {
  const { token } = req.params;
  const userConfirm = await User.findOne({ token });

  if (!userConfirm) {
    const error = new Error("El token no es válido o ya ha caducado");
    return res.status(403).json({ msg: error.message });
  }

  try {
    userConfirm.confirmed = true;
    userConfirm.token = "";
    await userConfirm.save();
    res.json({ msg: "Su cuenta ha sido confirmada correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Usuario no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  try {
    user.token = generateID();
    await user.save();
    res.json({ msg: "Hemos enviado un correo con las instrucciones" });
  } catch (error) {
    console.log(error);
  }
};

const confirmToken = async (req: Request, res: Response) => {
  const { token } = req.params;
  const tokenValid = await User.findOne({ token });

  if (tokenValid) {
    res.json({ msg: "Acceso autorizado" });
  } else {
    const error = new Error("Acceso no autorizado");
    return res.status(404).json({ msg: error.message });
  }
};

const newPassword = async (req: Request, res: Response) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({ token });

  if (user) {
    user.password = password;
    user.token = "";
    try {
      await user.save();
      res.json({ msg: "Contraseña modificada correctamente" });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Acceso no autorizado");
    return res.status(404).json({ msg: error.message });
  }
};

const profile = async (req: Request, res: Response) => {
  const { user } = req;
  res.json(user);
};

export {
  register,
  authenticate,
  confirmAccount,
  forgotPassword,
  confirmToken,
  newPassword,
  profile,
};
