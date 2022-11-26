// Login Page
import AuthFormCard from "../../../components/AuthFormCard/AuthFormCard";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <AuthFormCard />
      </div>
    </div>
  );
};
export default Login;
