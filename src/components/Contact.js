import React from "react";
import Link from "next/Link";
import Image from "next/Image";
import styles from "../../styles/modules/contact.module.css";

const contact = () => {
  return (
    <>
      <p className={styles.projectTitle}>Contact me</p>

      <div className={styles.mainContainer}>
        <section className={styles.container}>
          <article className={styles.article1}>
            What would you do if you had a web developer
          </article>
          <article className={styles.article2}>
            expert available at your fingertips?
          </article>

          <article className={styles.article3}>
            Want to start new project? Or just say hey.
          </article>
          <article className={styles.article2}>
          You can also follow me on LinkedIn.
          </article>

          <button className={styles.btn}>LinkedIn</button>
        </section>

        <div>
          <Image src="/img/contact.jpeg" width={500} height={400} />
        </div>
      </div>
    </>
  );
};

export default contact;
