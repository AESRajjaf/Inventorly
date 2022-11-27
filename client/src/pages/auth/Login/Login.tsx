// Login Page
import AuthFormCard from "../../../components/AuthFormCard/AuthFormCard";
import styles from "./Login.module.css";

const Login = () => {
  const subtitle = "Iniciar sesión";
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <AuthFormCard subtitle={subtitle} />
      </div>
    </div>
  );
};
export default Login;
