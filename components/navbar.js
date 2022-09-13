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
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/reviews/">
                <a>Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs/">
                <a>FAQS</a>
              </Link>
            </li>
            <li>
              <Link href="/contact/">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>

        </div>

      </nav>
  )
}

export default Navbar