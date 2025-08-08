import styles from "./styles.module.scss";
import { items } from "@/utils";

export default function MenuHorizontal() {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.content}>
          {items.map(({ label }) => {
            return (
              <li key={label} className={styles.menuItem}>
                <a>{label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
