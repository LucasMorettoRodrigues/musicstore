import styles from './Navbar.module.css'

import logo from '../../assets/logo.png'

import { useState } from 'react'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"></img>
                    <div className={styles.mobile_row1_icons}>
                        <a href='#'><i class="bi bi-person-circle"></i></a>
                        <a href='#'><i class="bi bi-cart"></i></a>
                    </div>
                </div>

                <div className={styles.nav_items}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search Products..."></input>
                        <button>Search</button>
                    </div>
                    <a href='#'><i class="bi bi-person-circle"></i></a>
                    <a href='#'><i class="bi bi-cart"></i></a>
                    <button onClick={() => setShowMenu(!showMenu)} className={styles.hamburger}><i class="bi bi-list"></i></button>
                </div>
            </div>
            <div className={showMenu ? null : styles.hidden}>
                <ul>
                    <li><a href="#">Guitar</a></li>
                    <li><a href="#">Bass</a></li>
                    <li><a href="#">Keyboard</a></li>
                    <li><a href="#">Drums</a></li>
                    <li><a href="#">Amplifier</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar