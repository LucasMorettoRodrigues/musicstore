import styles from './Navbar.module.css'

import logo from '../../assets/logo.png'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getUser, logout } from '../../services/auth.service'
import { reset } from '../../redux/cartRedux'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = ({ openCart }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [search, setSearch] = useState(null)
    const cart = useSelector((state) => state.cart)

    const handleLogout = () => {
        logout()
        dispatch(reset())
        navigate('/login')
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/musicstore"><img src={logo} alt="logo"></img></Link>
                    <div className={styles.mobile_row1_icons}>
                        <Link to={getUser() ? "/orders" : "/login"}><i class="bi bi-person-circle"></i></Link>
                        <div className={styles.icon} onClick={openCart}>
                            <i class="bi bi-cart"></i>
                            {cart.products.length > 0 &&
                                <span>{cart.products.length}</span>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.nav_items}>
                    <div className={styles.search}>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..."></input>
                        <button
                            onClick={() => search && navigate("/products", { state: { search: search } })}>
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
                    <div className={styles.icon} onClick={openCart}>
                        <i class="bi bi-cart"></i>
                        {cart.products.length > 0 &&
                            <span>{cart.products.length}</span>
                        }
                    </div>
                    <button onClick={() => setShowMenu(!showMenu)} className={styles.hamburger}><i class="bi bi-list"></i></button>
                </div>
            </div>
            <div className={showMenu ? null : styles.hidden}>
                <ul>
                    <Link onClick={() => setShowMenu(false)} to='/category/guitar'><li>Guitar</li></Link>
                    <Link onClick={() => setShowMenu(false)} to='/category/bass'><li>Bass</li></Link>
                    <Link onClick={() => setShowMenu(false)} to='/category/keyboard'><li>Keyboard</li></Link>
                    <Link onClick={() => setShowMenu(false)} to='/category/drums'><li>Drums</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar