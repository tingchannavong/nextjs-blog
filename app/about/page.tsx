import styles from "./about.module.css"

function AboutPage() {
  return (
    <section className={styles.section}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.content}>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sapiente. Quis temporibus assumenda non porro id illo iusto consectetur facilis veritatis perspiciatis praesentium ea, exercitationem harum sunt eum explicabo illum ipsa possimus. Est qui provident alias tempora facilis recusandae rerum quas aut consectetur animi dicta, sed, odio porro explicabo consequuntur.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, minus!</p>
        </div>
    </section>
  )
}

export default AboutPage