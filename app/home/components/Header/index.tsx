import IconButton from "@/components/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    // <header className={styles.container}>
    //   <h1 className={styles.title}>Joana da Silva Oliveira</h1>
    //   <IconButton icon={<PersonIcon />} size="medium" />
    // </header>

    <header className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Joana da Silva Oliveira</h1>
        <IconButton icon={<PersonIcon />} />
      </div>
    </header>
  );
}
