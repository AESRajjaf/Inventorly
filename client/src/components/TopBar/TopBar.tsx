// TopBar Component
import styles from "./TopBar.module.css";

import StockIcon from "../../assets/Icons/Stock.svg";
import NotificationIcon from "../../assets/Icons/Notification.svg";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <h2>
        <img src={StockIcon} />
        Inventario
      </h2>
      <div className={styles.rightSide}>
        <input type="text" placeholder="Buscar..." />
        <img src={NotificationIcon} />
        <div className={styles.user}>
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
