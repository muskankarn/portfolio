import React from 'react';
import Link from 'next/link';
import styles from "../../styles/modules/header.module.css";


const Header = (props) => {
  
  return (
    <>
       <header className={styles.header}>
        <Link href='/' className={styles.headerFirst}>HOME</Link>
        <Link href='/about' className={styles.otherHeader}>ABOUT</Link>
        <Link href='/skills' className={styles.otherHeader}>SKILLS</Link>
        <Link href='/project' className={styles.otherHeader}>PROJECT</Link>
        <Link href='/contact' className={styles.otherHeader}>CONTACT</Link>
       </header>
    </>
  )
}

export default Header
