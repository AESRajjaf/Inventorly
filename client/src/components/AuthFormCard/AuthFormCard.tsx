// AuthFormCard Component
import styles from "./AuthFormCard.module.css";
import Logo from "../../assets/Logo_2.svg";

const AuthFormCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.form}>
        <h3>Bienvenid@ de nuevo</h3>
        <p>Iniciar sesión</p>
      </div>
    </div>
  );
};
export default AuthFormCard;
