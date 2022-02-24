import styles from './Footer.module.css'

import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <img src={logo} alt="logo" />
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>(55) 5555-5555 / Store</li>
                        <li>(55) 4444-4444 / WhatsApp</li>
                        <li>store1@musicstore.com</li>
                        <li>store2  @musicstore.com</li>
                    </ul>
                </div>
            </div>
            <p>Copyright © 2022 - MusicStore ®</p>
        </footer>
    )
}

export default Footer