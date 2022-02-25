import styles from './Home.module.css'

import logo from '../../assets/logo_blue_3.png'
import guitarCollection from '../../assets/guitars-collection.jpg'
import drumCollection from '../../assets/drums-collection.jpg'
import keyboardCollection from '../../assets/keyboards-collection.jpg'

import guitar1 from '../../assets/products/guitar1.webp'
import guitar2 from '../../assets/products/guitar2.webp'
import bass1 from '../../assets/products/bass1.jpg'
import drums1 from '../../assets/products/drums1.webp'

const Home = () => {

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="MusicStore Logo"></img>
            </header>
            <section className={styles.section_container}>
                <h1>Best Sellers</h1>
                <div className={styles.products_container} id='teste'>
                    <button onClick={(e) => e.currentTarget.parentNode.scrollLeft += 340} className={styles.next_btn}>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <button onClick={(e) => e.currentTarget.parentNode.scrollLeft -= 340} className={styles.prev_btn}>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <div className={styles.product_card}>
                        <img src={guitar1} alt=""></img>
                        <h4>Awesome Guitar</h4>
                        <p>$ 999.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={guitar2} alt=""></img>
                        <h4>Good Guitar</h4>
                        <p>$ 1000.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={bass1} alt=""></img>
                        <h4>Awesome Bass</h4>
                        <p>$ 1200.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={drums1} alt=""></img>
                        <h4>Awesome Drums</h4>
                        <p>$ 2000.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={guitar1} alt=""></img>
                        <h4>Awesome Guitar</h4>
                        <p>$ 999.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={guitar2} alt=""></img>
                        <h4>Good Guitar</h4>
                        <p>$ 1000.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={bass1} alt=""></img>
                        <h4>Awesome Bass</h4>
                        <p>$ 1200.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={drums1} alt=""></img>
                        <h4>Awesome Drums</h4>
                        <p>$ 2000.99</p>
                    </div>
                </div>
            </section>
            <section className={styles.collection_section}>
                <a href="#" className={styles.row1}>
                    <h2>Keyboards</h2>
                    <img src={keyboardCollection} alt="keyboard"></img>
                </a>
                <div className={styles.row2}>
                    <a href="#" className={styles.row2_col1}>
                        <h2>Drums</h2>
                        <img src={drumCollection} alt="Drums"></img>
                    </a>
                    <a href="#" className={styles.row2_col2}>
                        <h2>Guitars</h2>
                        <img src={guitarCollection} alt="Guitars"></img>
                    </a>
                </div>
            </section>
            <section className={styles.section_container}>
                <h1>Basses</h1>
                <div className={styles.products_container} id='teste'>
                    <button onClick={(e) => e.currentTarget.parentNode.scrollLeft += 340} className={styles.next_btn}>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <button onClick={(e) => e.currentTarget.parentNode.scrollLeft -= 340} className={styles.prev_btn}>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <div className={styles.product_card}>
                        <img src={guitar1} alt=""></img>
                        <h4>Awesome Guitar</h4>
                        <p>$ 999.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={guitar2} alt=""></img>
                        <h4>Good Guitar</h4>
                        <p>$ 1000.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={bass1} alt=""></img>
                        <h4>Awesome Bass</h4>
                        <p>$ 1200.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={drums1} alt=""></img>
                        <h4>Awesome Drums</h4>
                        <p>$ 2000.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={guitar1} alt=""></img>
                        <h4>Awesome Guitar</h4>
                        <p>$ 999.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={guitar2} alt=""></img>
                        <h4>Good Guitar</h4>
                        <p>$ 1000.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={bass1} alt=""></img>
                        <h4>Awesome Bass</h4>
                        <p>$ 1200.99</p>
                    </div>
                    <div className={styles.product_card}>
                        <img src={drums1} alt=""></img>
                        <h4>Awesome Drums</h4>
                        <p>$ 2000.99</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home