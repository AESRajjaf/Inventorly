// AuthFormCard Component
import { useState } from "react";
import styles from "./AuthFormCard.module.css";
import Logo from "../../assets/Logo_2.svg";
import clientAxios from "../../config/clientAxios";

const AuthFormCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <img className={styles.logo} src={Logo} />
      <div className={styles.form}>
        <h3>Bienvenid@ de nuevo</h3>
        <p>hello</p>
        <form>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={onSubmit}>BOTONA</button>
        </form>
      </div>
    </div>
  );
};
export default AuthFormCard;
