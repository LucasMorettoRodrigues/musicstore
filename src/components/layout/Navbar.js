import styles from './Navbar.module.css'

import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ openCart }) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                    <div className={styles.mobile_row1_icons}>
                        <a href='#'><i class="bi bi-person-circle"></i></a>
                        <a onClick={openCart} href='/'><i class="bi bi-cart"></i></a>
                    </div>
                </div>

                <div className={styles.nav_items}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search Products..."></input>
                        <button>Search</button>
                    </div>
                    <a href='#'><i class="bi bi-person-circle"></i></a>
                    <a onClick={openCart} href='#'><i class="bi bi-cart"></i></a>
                    <button onClick={() => setShowMenu(!showMenu)} className={styles.hamburger}><i class="bi bi-list"></i></button>
                </div>
            </div>
            <div className={showMenu ? null : styles.hidden}>
                <ul>
                    <Link to='/guitar'><li>Guitar</li></Link>
                    <Link to='/bass'><li>Bass</li></Link>
                    <Link to='/keyboard'><li>Keyboard</li></Link>
                    <Link to='/drums'><li>Drums</li></Link>
                    <Link to='/amplifier'><li>Amplifier</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar