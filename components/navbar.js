import React from 'react'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo_container}>
          <div>
            <Image alt='' src={logo} width="20" height="20"/>
          </div>
          <div>
            <span>
              P
            </span>
            <span>
              E
            </span>
            <span>
              H
            </span>
          </div>
        </div>

        <div>

          <ul className={styles.nav_list}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                FAQS
              </Link>
            </li>
            <li>
              <Link href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>

        </div>

      </nav>
  )
}

export default Navbar