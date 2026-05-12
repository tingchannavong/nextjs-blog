import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>/\ Welcome to <span className={styles.titleAccent}>Next JS</span> App /\</h1>
        <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero alias soluta dolor consequatur velit cum quo, blanditiis quam! Iure accusamus dolorem distinctio facilis corporis quidem, labore quam quas ullam sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa voluptatum, enim fuga provident id voluptates magnam labore architecto sit.</p>
      </div>
    </section>
  );
}
