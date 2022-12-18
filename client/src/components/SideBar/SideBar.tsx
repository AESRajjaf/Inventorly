// SideBar Components
import { Link } from "react-router-dom";

// Icons Import
import Logo from "../../assets/Logo_2.svg";

import DashboardIcon from "../../assets/Icons/Dashboard.svg";
import DashboardLightIcon from "../../assets/Icons/DashboardLight.svg";

import OrdersIcon from "../../assets/Icons/Orders.svg";
import OrdersLightIcon from "../../assets/Icons/OrdersLight.svg";

import ClientsIcon from "../../assets/Icons/Clients.svg";
import ClientsLightIcon from "../../assets/Icons/ClientsLight.svg";

import StockIcon from "../../assets/Icons/Stock.svg";
import StockLightIcon from "../../assets/Icons/StockLight.svg";

import ProvidersIcon from "../../assets/Icons/Providers.svg";
import ProvidersLightIcon from "../../assets/Icons/ProvidersLight.svg";

import EmployeesIcon from "../../assets/Icons/Employees.svg";
import EmployeesLightIcon from "../../assets/Icons/EmployeesLight.svg";

import SettingsIcon from "../../assets/Icons/Settings.svg";
import SettingsLightIcon from "../../assets/Icons/SettingsLight.svg";

import SupportHeadphonesIcon from "../../assets/Icons/SupportHeadphones.svg";
import GiftIcon from "../../assets/Icons/Gift.svg";
import LogoutIcon from "../../assets/Icons/Logout.svg";

// Styles Import
import styles from "./SideBar.module.css";

interface Props {
  page: string;
}

const SideBar = ({ page }: Props) => {
  return (
    <div className={styles.bar}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.content}>
        <div className={styles.navigation}>
          <Link
            to={"/"}
            className={
              page === "Dashboard" ? styles.navLinkActive : styles.navLink
            }
          >
            <img
              src={page === "Dashboard" ? DashboardLightIcon : DashboardIcon}
            />
            <span>Dashboard</span>
          </Link>
          <Link
            to={"/orders"}
            className={
              page === "Orders" ? styles.navLinkActive : styles.navLink
            }
          >
            <img src={page === "Orders" ? OrdersLightIcon : OrdersIcon} />
            <span>Pedidos</span>
          </Link>
          <Link
            to={"/clients"}
            className={
              page === "Clients" ? styles.navLinkActive : styles.navLink
            }
          >
            <img src={page === "Clients" ? ClientsLightIcon : ClientsIcon} />
            <span>Clientes</span>
          </Link>
          <Link
            to={"/stock"}
            className={page === "Stock" ? styles.navLinkActive : styles.navLink}
          >
            <img src={page === "Stock" ? StockLightIcon : StockIcon} />
            <span>Inventario</span>
          </Link>
          <Link
            to={"/providers"}
            className={
              page === "Providers" ? styles.navLinkActive : styles.navLink
            }
          >
            <img
              src={page === "Providers" ? ProvidersLightIcon : ProvidersIcon}
            />
            <span>Proveedores</span>
          </Link>
          <Link
            to={"/employees"}
            className={
              page === "Employees" ? styles.navLinkActive : styles.navLink
            }
          >
            <img
              src={page === "Employees" ? EmployeesLightIcon : EmployeesIcon}
            />
            <span>Empleados</span>
          </Link>
          <Link
            to={"/settings"}
            className={
              page === "Settings" ? styles.navLinkActive : styles.navLink
            }
          >
            <img src={page === "Settings" ? SettingsLightIcon : SettingsIcon} />
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
