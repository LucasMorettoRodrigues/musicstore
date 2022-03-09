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
                        <li><i class="bi bi-facebook"></i>Facebook</li>
                        <li><i class="bi bi-instagram"></i>Instagram</li>
                        <li><i class="bi bi-youtube"></i>Youtube</li>
                        <li><i class="bi bi-twitter"></i>Twitter</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><i class="bi bi-telephone"></i>(55) 5555-5555 / Store</li>
                        <li><i class="bi bi-telephone"></i>(55) 4444-4444 / WhatsApp</li>
                        <li><i class="bi bi-envelope"></i>store1@musicstore.com</li>
                        <li><i class="bi bi-envelope"></i>store2  @musicstore.com</li>
                    </ul>
                </div>
            </div>
            <p>Copyright © 2022 - MusicStore ®</p>
        </footer >
    )
}

export default Footer