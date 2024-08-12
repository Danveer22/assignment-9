import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/images/logo.svg" alt="Fylo logo" className={styles.logo} />
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.contactItemFirst}>
            <img
              src="/images/icon-location.svg"
              alt="Location icon"
              className={styles.contactIconFirst}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              reiciendis rem, adipisci itaque deleniti animi repudiandae commodi
            </p>
          </div>
          <div className={styles.contactItemSecond}>
            <div>
              <img
                src="/images/icon-phone.svg"
                alt="Phone icon"
                className={styles.contactIcon}
              />
              <span>+1-543-123-4567</span>
            </div>
            <div>
              <img
                src="/images/icon-email.svg"
                alt="Email icon"
                className={styles.contactIcon}
              />
              <span>example@fylo.com</span>
            </div>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#jobs">Jobs</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            </ul>
          </nav>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a href="#contact">Contact us</a>
              </li>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
            </ul>
          </nav>
          <div className={styles.socialMedia}>
            <span>
              <ion-icon
                className={styles.socialIcon}
                name="logo-facebook"
              ></ion-icon>
            </span>
            <span>
              <ion-icon
                className={styles.socialIcon}
                name="logo-twitter"
              ></ion-icon>
            </span>
            <span>
              <ion-icon
                className={styles.socialIcon}
                name="logo-instagram"
              ></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
