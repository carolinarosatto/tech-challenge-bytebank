import Button from "@/components/Button";
import styles from "./styles.module.scss";
import { items } from "@/utils";

export default function MenuHorizontal() {
  return (
    <div>
      <nav className={styles.container}>
        <ul className={styles.content}>
          {items.map(({ label }) => {
            return <Button key={label} label={label} priority="tertiary" />;
          })}
        </ul>
      </nav>
    </div>
  );
}
