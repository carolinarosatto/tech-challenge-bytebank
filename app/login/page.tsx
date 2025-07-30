import BenefitsList from "./components/BenefitsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import styles from "./styles.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
      <BenefitsList />
      <Footer />
    </div>
  );
}
