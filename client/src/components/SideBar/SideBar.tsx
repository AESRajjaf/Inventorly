// SideBar Components
import { Link } from "react-router-dom";

// Icons Import
import Logo from "../../assets/Logo_2.svg";
import CategoryIcon from "../../assets/Icons/Category.svg";
import OrdersIcon from "../../assets/Icons/Orders.svg";
import ClientsIcon from "../../assets/Icons/Clients.svg";
import StockIcon from "../../assets/Icons/Stock.svg";
import ProvidersIcon from "../../assets/Icons/Providers.svg";
import EmployeesIcon from "../../assets/Icons/Employees.svg";
import SettingsIcon from "../../assets/Icons/Setting.svg";
import SupportHeadphonesIcon from "../../assets/Icons/SupportHeadphones.svg";
import GiftIcon from "../../assets/Icons/Gift.svg";
import LogoutIcon from "../../assets/Icons/Logout.svg";

// Styles Import
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.bar}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.content}>
        <div className={styles.navigation}>
          <Link to={"/"} className={styles.navLinkActive}>
            <img src={CategoryIcon} />
            <span>Dashboard</span>
          </Link>
          <Link to={"/orders"} className={styles.navLink}>
            <img src={OrdersIcon} />
            <span>Pedidos</span>
          </Link>
          <Link to={"/clients"} className={styles.navLink}>
            <img src={ClientsIcon} />
            <span>Clientes</span>
          </Link>
          <Link to={"/stock"} className={styles.navLink}>
            <img src={StockIcon} />
            <span>Inventario</span>
          </Link>
          <Link to={"/providers"} className={styles.navLink}>
            <img src={ProvidersIcon} />
            <span>Proveedores</span>
          </Link>
          <Link to={"/employees"} className={styles.navLink}>
            <img src={EmployeesIcon} />
            <span>Empleados</span>
          </Link>
          <Link to={"/settings"} className={styles.navLink}>
            <img src={SettingsIcon} />
            <span>Ajustes</span>
          </Link>
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
