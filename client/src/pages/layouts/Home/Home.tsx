// Home Page
import SideBar from "../../../components/SideBar/SideBar";
import Content from "../../../components/Content/Content";

const Home = () => {
  const page = "Dashboard";

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <SideBar page={page} />
      <Content page={page}>
        <h1>Welcome Back!</h1>
      </Content>
    </div>
  );
};
export default Home;
