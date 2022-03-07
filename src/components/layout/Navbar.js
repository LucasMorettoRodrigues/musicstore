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
                        <Link to="/login"><i class="bi bi-person-circle"></i></Link>
                        <a onClick={openCart} href='/'><i class="bi bi-cart"></i></a>
                    </div>
                </div>

                <div className={styles.nav_items}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search Products..."></input>
                        <button>Search</button>
                    </div>
                    <Link to="/login"><i class="bi bi-person-circle"></i></Link>
                    <div className={styles.icon} onClick={openCart}><i class="bi bi-cart"></i></div>
                    <button onClick={() => setShowMenu(!showMenu)} className={styles.hamburger}><i class="bi bi-list"></i></button>
                </div>
            </div>
            <div className={showMenu ? null : styles.hidden}>
                <ul>
                    <Link to='/category/guitar'><li>Guitar</li></Link>
                    <Link to='/category/bass'><li>Bass</li></Link>
                    <Link to='/category/keyboard'><li>Keyboard</li></Link>
                    <Link to='/category/drums'><li>Drums</li></Link>
                    <Link to='/category/amplifier'><li>Amplifier</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar