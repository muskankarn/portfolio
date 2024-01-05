import Image from "next/Image";
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// import styles from "../styles/modules/about.module.css";
import styles from  "../../styles/modules/about.module.css";


const about = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>

   

      <div className={styles.mainContainer}>
        <Image
        className={styles.img}
          src="/img/about-img.jpg"
          alt="Image not found"
          width={600}
          height={400}
        ></Image>

        <section className={styles.container}>
          <p className={styles.aboutTitle}>So, who am i ?</p>
          <p className={styles.aboutContent}>🔮 Hi there !! 👋 I'm Muskan Kumari.</p>
          <p className={styles.aboutContent}>
            {" "}
            🔮 A 3rd year college student pursing diploma in computer science and
            engineering.
          </p>
          <p className={styles.aboutContent}>
            {" "}
            🔮 I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </p>
          <p className={styles.aboutContent}>
            {" "}
            🔮 Interested in the entire web development and want to work on
            ambitious projects with interesting people.
          </p>
        </section>
      </div>
    </>
  );
};

export default about;
