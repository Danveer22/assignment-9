import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.svg" alt="Fylo logo" />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
