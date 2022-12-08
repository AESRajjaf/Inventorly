// SideBar Components
import Logo from "../../assets/Logo_2.svg";
import CategoryIcon from "../../assets/Icons/Category.svg";
import OrdersIcon from "../../assets/Icons/Orders.svg";
import ClientsIcon from "../../assets/Icons/Clients.svg";
import InventoryIcon from "../../assets/Icons/Inventory.svg";
import ProvidersIcon from "../../assets/Icons/Providers.svg";
import EmployeesIcon from "../../assets/Icons/Employees.svg";
import SettingsIcon from "../../assets/Icons/Setting.svg";
import SupportHeadphonesIcon from "../../assets/Icons/SupportHeadphones.svg";
import GiftIcon from "../../assets/Icons/Gift.svg";
import LogoutIcon from "../../assets/Icons/Logout.svg";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.content}>
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
        <div className={styles.actions}>
          <div className={styles.linksGroup}>
            <div className={styles.contactLink}>
              <img src={SupportHeadphonesIcon} />
              <span>Contactar a soporte</span>
            </div>
            <div className={styles.standardPlan}>
              <img src={GiftIcon} />
              <span>Plan estandar</span>
            </div>
          </div>
          <div className={styles.logout}>
            <img src={LogoutIcon} />
            <span>Cerrar sesion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
