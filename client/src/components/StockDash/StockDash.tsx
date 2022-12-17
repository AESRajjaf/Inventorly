// StockDash Component
import styles from "./StockDash.module.css";

// Icons Import
import StockLightIcon from "../../assets/Icons/StockLight.svg";
import ClientsIcon from "../../assets/Icons/Clients.svg";

const StockDash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ backgroundColor: "#F1A311" }}>
        <div className={styles.icon}>
          <img src={StockLightIcon} />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={ClientsIcon} />
        </div>
      </div>
    </div>
  );
};

export default StockDash;
