import React from "react";
import Image from "next/Image";
import styles from "../styles/modules/index.module.css";
import Header from "../src/components/Header";
import About from "../src/components/About";
import ImgSlider from "../src/components/ImgSlider";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Project from "../src/components/Project";
// import Contact from "../src/components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/Link';


const index = () => {
  return (
    <>
      <Header></Header>

      <section className={styles.firstPage}>
        <div className={styles.introductionContainer}>
          <p className={styles.greeting}>Hello! I'm</p>
          <p className={styles.intro}>Web developer</p>

          {/* <h1 style={intro}>Muskan Kumari | react Developer | Frontend Developer | Computer Engineer</h1> */}
          <p className={styles.discription}>
            I craft user-friendly interfaces, responsive web designs and
            scalable frontend projects
          </p>
          <p className={styles.discriptionPart2}>
            {" "}
            with great user experiences.
          </p>

          <button className={styles.button}>
          <Link href='/Project' className={styles.otherHeader}>My projects ➡</Link></button>
          <button className={styles.button} type="button">
            Contact me ➡
          </button>
        </div>
        <Image
          className={styles.profilePic}
          src="/img/profilePic.avif"
          width={300}
          height={300}
        ></Image>
      </section>


      <ImgSlider />
      <About />
      <Skills />
      <Project />
      <Contact />

      <p className={styles.madeBy}>Made by @Muskan Kumari</p>
    </>
  );
};

export default index;
