// Stock Page
import Content from "../../../components/Content/Content";
import ListCard from "../../../components/ListCard/ListCard";
import SideBar from "../../../components/SideBar/SideBar";

// Styles Import
import styles from "./Stock.module.css";

const Stock = () => {
  return (
    <main className={styles.main}>
      <SideBar />
      <Content>
        <ListCard />
      </Content>
    </main>
  );
};

export default Stock;
