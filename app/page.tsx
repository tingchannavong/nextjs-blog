import styles from "./page.module.css";
import Image from "next/image";
export default function HomePage() {
  return (
    <section className={styles.hero}>
      <Image src="/images/dog.jpg" alt="The Black Dog" width={225} height={125}/>
       {/* <img src="/images/dog.jpg" alt="dogpic" /> */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>/\ Welcome to <span className={styles.titleAccent}>Next JS</span> App /\</h1>
        <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero alias soluta dolor consequatur velit cum quo, blanditiis quam! Iure accusamus dolorem distinctio facilis corporis quidem, labore quam quas ullam sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa voluptatum, enim fuga provident id voluptates magnam labore architecto sit.</p>
      </div>
    </section>
  );
}
