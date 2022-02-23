import styles from './Header.module.css'

import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="logo"></img>
            <div className={styles.search}>
                <input type="text" placeholder="Search Products"></input>
                <button>Search</button>
            </div>
        </nav>
    )
}

export default Header