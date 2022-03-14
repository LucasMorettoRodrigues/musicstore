import styles from './Home.module.css'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo_blue_3.png'
import guitarCollection from '../../assets/guitars-collection.jpg'
import drumCollection from '../../assets/drums-collection.jpg'
import keyboardCollection from '../../assets/keyboards-collection.jpg'
import Carousel from '../layout/Carousel'

const Home = () => {
    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="MusicStore Logo"></img>
            </header>
            < Carousel />
            <section className={styles.collection_container}>
                <Link to="/category/keyboard" className={styles.row1}>
                    <h2>Keyboards</h2>
                    <img src={keyboardCollection} alt="keyboard"></img>
                </Link>
                <div className={styles.row2}>
                    <Link to="/category/drums" className={styles.row2_col1}>
                        <h2>Drums</h2>
                        <img src={drumCollection} alt="Drums"></img>
                    </Link>
                    <Link to="/category/guitar" className={styles.row2_col2}>
                        <h2>Guitars</h2>
                        <img src={guitarCollection} alt="Guitars"></img>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Home