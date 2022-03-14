import styles from './Navbar.module.css'

import logo from '../../assets/logo.png'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getUser, logout } from '../../services/auth.service'

const Navbar = ({ openCart }) => {

    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [search, setSearch] = useState(null)

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                    <div className={styles.mobile_row1_icons}>
                        <Link to={getUser() ? "/orders" : "/login"}><i class="bi bi-person-circle"></i></Link>

                        <div className={styles.icon} onClick={openCart}><i class="bi bi-cart"></i></div>
                    </div>
                </div>
                <div className={styles.nav_items}>
                    <div className={styles.search}>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..."></input>
                        <button
                            onClick={() => search && navigate("/products", { state: { search: search } })}
                        >
                            Search
                        </button>
                    </div>
                    <div className={styles.user_icon}>
                        <i class="bi bi-person-circle"></i>
                        <ul>
                            {getUser()
                                ? <>
                                    <li><Link to="/orders">My Orders</Link></li>
                                    <li onClick={handleLogout}>Logout</li>
                                </>
                                : <>
                                    <li><Link to="/login">Sign in</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                </>
                            }

                        </ul>
                    </div>
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
                </ul>
            </div>
        </nav>
    )
}

export default Navbar