import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section>
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <h1 className={styles.titleAccent}>Next JS App</h1>
      </div>
    </section>
  );
}
