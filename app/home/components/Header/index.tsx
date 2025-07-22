import IconButton from "@/components/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Olá, Joana!</h1>
      <IconButton icon={<PersonIcon />} />
    </header>
  );
}
