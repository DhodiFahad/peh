import React from 'react'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <Image alt='Penis Enlargment Herbs' src={logo} width="40" height="40"/>
          </div>
          <div className={styles.logo_typo}>
            <span>
              Penis Enlargment Herbs
            </span>
          </div>
        </div>

        <div>

          <ul className={styles.nav_list}>
            <li className={styles.home_link}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.whatsapp}>
                <a href="https://wa.me/%2B256705183414">Talk To Us Via Whatsapp</a>
            </li>
           
          </ul>
        </div>

      </nav>
  )
}

export default Navbar