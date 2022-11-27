// AuthFormCard Component
import { useState } from "react";
import styles from "./AuthFormCard.module.css";
import Logo from "../../assets/Logo_2.svg";
import MessageIcon from "../../assets/Icons/Message.svg";
import LockIcon from "../../assets/Icons/Lock.svg";
import EyeOnIcon from "../../assets/Icons/EyeOn.svg";
import EyeOffIcon from "../../assets/Icons/EyeOff.svg";
import clientAxios from "../../config/clientAxios";

const AuthFormCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      return;
    }

    try {
      const { data } = await clientAxios.post("/user/login", {
        email,
        password,
      });

      console.log(data);

      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.logo} src={Logo} />
      </div>
      <div className={styles.form}>
        <h3>Bienvenid@ de nuevo</h3>
        <p>Iniciar Sesión</p>
        <form>
          <div className={styles.inputGroup}>
            <img className={styles.inputIcon} src={MessageIcon} />
            <input
              type="text"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <img className={styles.inputIcon} src={LockIcon} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className={styles.passwordIcon}
              src={showPassword ? EyeOnIcon : EyeOffIcon}
              onClick={() => setShowPassword(!showPassword)}
            />
            <a className={styles.forgotPassword} href="#">
              Restablecer contraseña
            </a>
          </div>

          <button className={styles.submitBtn} onClick={onSubmit}>
            Iniciar Sesión
          </button>
          <a className={styles.registerLink} href="#">
            ¿No tienes una cuenta? <span>Contáctanos</span>
          </a>
        </form>
      </div>
    </div>
  );
};
export default AuthFormCard;
