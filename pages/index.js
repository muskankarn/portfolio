import React from "react";
import Image from "next/image";
import styles from "../styles/modules/index.module.css";
import Header from "../src/components/Header";
import About from "../src/components/About";
import ImgSlider from "../src/components/ImgSlider";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Project from "../src/components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';


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

          
          <Link href='/project' className={styles.button}>My projects ➡</Link>
          <Link href='/contact' className={styles.button}>Contact me ➡</Link>
          
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
