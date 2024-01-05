import React from 'react';
import Link from 'next/Link';
import styles from "../../styles/modules/header.module.css";


const Header = (props) => {
  
  return (
    <>
       <header className={styles.header}>
        <Link href='/' className={styles.headerFirst}>HOME</Link>
        <Link href='/about' className={styles.otherHeader}>ABOUT</Link>
        <Link href='/skills' className={styles.otherHeader}>SKILLS</Link>
        <Link href='/Project' className={styles.otherHeader}>PROJECT</Link>
        <Link href='/Contact' className={styles.otherHeader}>CONTACT</Link>
       </header>
    </>
  )
}

export default Header
