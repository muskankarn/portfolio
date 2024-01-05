import React from "react";
import styles from "../../styles/modules/project.module.css";
// import Image from "next/Image";

const Project = () => {
  return (
    <>
      <p className={styles.projectTitle}>Projects</p>
      {/* project img p click krte hi project browser m open hojaye */}

      {/* <Image src="/img/portfolio_img.jpeg" width={600} height={400}></Image> */}

      <div className={styles.container}>
        <div
          className={styles.box1}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className={styles.projectName}>Portfolio</p>
            <p className={styles.techStack1}>
              Techstack : HTML, CSS, ReactJs, Next.js
            </p>
            <p className={styles.projectDescription}>
              A Compilation of academic and professional materials including my
              interests, skills, qualifications and education.
            </p>
            <button className={styles.projectLink}>Visit the website ➡</button>
          </div>
        </div>

        <div
          className={styles.box2}
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className={styles.projectName}>Qr code generator</p>
            <p className={styles.techStack2}>
              Techstack - HTML, CSS, JavaScript, ReactJs, Next.js, Tailwind CSS
            </p>
            <p className={styles.projectDescription}>
              It retrieves data or text from the user and generates a QR code of
              the input with 100% of an accuracy.
            </p>
            <button className={styles.projectLink}>Visit the website ➡</button>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div
          className={styles.box3}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className={styles.projectName}>Code editor</p>
            <p className={styles.techStack1}>Techstack : ReactJs</p>
            <p className={styles.projectDescription}>
              A CodePen clone, allows coding in HTML, CSS, and JavaScript with
              browser-based local storage functionality.
            </p>
            <button className={styles.projectLink}>Visit the website ➡</button>
          </div>
        </div>

        <div
          className={styles.box4}
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <p className={styles.projectName}>Covid-19 tracker</p>
            <p className={styles.techStack3}>Techstack - ReactJs, API</p>
            <p className={styles.projectDescription}>
              A platform designed to provide up-to-date information on the
              spread of the coronavirus worldwide.
            </p>
            <button className={styles.projectLink}>Visit the website ➡</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
