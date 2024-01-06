// import React from 'react';
import Image from "next/image";
// import Header from '../components/Header';
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/modules/skills.module.css";

const skills = () => {
  //js object //obj name=imgStyle

  return (
    <>
      {/* <Header/> */}
      <p className={styles.skillsTitle}>Skills</p>
      <p className={styles.skillsSubTitle}>
        Better web experiences start with great front end design!
      </p>

      <div data-aos="zoom-in-up" className={styles.skillsSection}>
      <div className={styles.mainContainer}>
          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/html1.png"
              alt="Image not found"
              width={100}
              height={100}
            />
            <pre className={styles.nameStyle1}>Html5</pre>
          </div>

          
           <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/css.png"
              alt="Image not found"
              width={102}
              height={102}
            />
            <p className={styles.nameStyle2}>Css3</p>
          </div>
          
          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/js.png"
              alt="Image not found"
              width={100}
              height={98}
            />
            <p className={styles.nameStyle3}>Javascript</p>
          </div>

          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/php4.png"
              alt="Image not found"
              width={120}
              height={100}
            />
            <pre className={styles.nameStyle1}>PHP</pre>
          </div>
          </div>

          <div className={styles.mainContainer}>
          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/react.png"
              alt="Image not found"
              width={100}
              height={98}
            />
            <p className={styles.nameStyle4}>React.js</p>
          </div>
          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/nextjs.png"
              alt="Image not found"
              width={100}
              height={98}
            />
            <p className={styles.nameStyle5}>Next.js</p>
          </div> 

          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/tailwindCssIcon.png"
              alt="Image not found"
              width={100}
              height={98}
            />
            <p className={styles.nameStyle6}>Tailwind css</p>
          </div> 

          <div className={styles.container}>
            <Image
              className={styles.imgStyle}
              src="/img/Mysql.png"
              alt="Image not found"
              width={100}
              height={100}
            />
            <pre className={styles.nameStyle1}>MySQL</pre>
          </div>
          </div>

          {/* <div className={styles.languagesNameStyle}>
   </div> */}

      </div>

      {/* <p>Front-End Development</p> */}
    </>
  );
};

export default skills;
