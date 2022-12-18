// Stock Page
import Content from "../../../components/Content/Content";
import ListCard from "../../../components/ListCard/ListCard";
import SideBar from "../../../components/SideBar/SideBar";
import StockDash from "../../../components/StockDash/StockDash";

// Styles Import
import styles from "./Stock.module.css";

const Stock = () => {
  const page = "Stock";

  return (
    <main className={styles.main}>
      <SideBar page={page} />
      <Content page={page}>
        <StockDash />
        <ListCard />
      </Content>
    </main>
  );
};

export default Stock;
