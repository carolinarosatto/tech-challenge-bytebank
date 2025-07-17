import BalanceCard from "./components/BalanceCard";
// import Menu from "./components/Menu";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Menu /> */}
      <BalanceCard />
    </div>
  );
};

export default Home;
