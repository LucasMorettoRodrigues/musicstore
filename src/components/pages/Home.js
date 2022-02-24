import styles from './Home.module.css'

import logo from '../../assets/logo_blue_3.png'

const Home = () => {

    const left = () => {
        const products = document.querySelector('#teste')
        products.scrollLeft += 680
    }

    const right = () => {
        const products = document.querySelector('#teste')
        products.scrollLeft -= 680
    }

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="MusicStore Logo"></img>
            </header>
            <section className={styles.section_container}>
                <h1>Best Sellers</h1>
                <div className={styles.products_container} id='teste'>
                    <button onClick={left} className={styles.next_btn}>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <button onClick={right} className={styles.prev_btn}>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>

                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>
                    <div className='product'>
                        Teste
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home