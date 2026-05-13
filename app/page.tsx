import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className="flex gap-2 justify-center">
      <p>&lt;Image/&gt; Nextjs</p>
      <Image src="/images/dog.jpg" alt="The Black Dog" width={225} height={125}/>
      <p>&lt;Img/&gt; HTML5</p>
       <img src="./images/dog.jpg" alt="dogpic" />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>/\ Welcome to <span className={styles.titleAccent}>Next JS</span> App /\</h1>
        <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero alias soluta dolor consequatur velit cum quo, blanditiis quam! Iure accusamus dolorem distinctio facilis corporis quidem, labore quam quas ullam sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa voluptatum, enim fuga provident id voluptates magnam labore architecto sit.</p>
        <Link href="/create-post"><button className="bg-amber-950 rounded-lg text-3xl p-4 text-slate-300 hover:text-purple-400">Create Post</button></Link>
      </div>
    </section>
  );
}
