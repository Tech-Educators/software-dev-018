import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Books app</h2>
      <p>we have better taste than you!</p>
    </div>
  );
}
