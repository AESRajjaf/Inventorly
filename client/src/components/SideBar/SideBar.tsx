// SideBar Components
import Logo from "../../assets/Logo_2.svg";
import CategoryIcon from "../../assets/Icons/Category.svg";
import OrdersIcon from "../../assets/Icons/Orders.svg";
import ClientsIcon from "../../assets/Icons/Clients.svg";
import InventoryIcon from "../../assets/Icons/Inventory.svg";
import ProvidersIcon from "../../assets/Icons/Providers.svg";
import EmployeesIcon from "../../assets/Icons/Employees.svg";
import SettingsIcon from "../../assets/Icons/Setting.svg";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.navigation}>
        <div className={styles.navLinkActive}>
          <img src={CategoryIcon} />
          <span>Dashboard</span>
        </div>
        <div className={styles.navLink}>
          <img src={OrdersIcon} />
          <span>Pedidos</span>
        </div>
        <div className={styles.navLink}>
          <img src={ClientsIcon} />
          <span>Clientes</span>
        </div>
        <div className={styles.navLink}>
          <img src={InventoryIcon} />
          <span>Inventario</span>
        </div>
        <div className={styles.navLink}>
          <img src={ProvidersIcon} />
          <span>Proveedores</span>
        </div>
        <div className={styles.navLink}>
          <img src={EmployeesIcon} />
          <span>Empleados</span>
        </div>
        <div className={styles.navLink}>
          <img src={SettingsIcon} />
          <span>Ajustes</span>
        </div>
      </div>
      <div className={styles.contact}>Contact</div>
    </div>
  );
};

export default SideBar;
