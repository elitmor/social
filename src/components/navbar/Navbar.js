import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className={styles.items}>
        <li className={styles.item}>
          <a className={`${styles.link} ${styles.active}`} href='#1'>
            Profile
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#2'>
            Messages
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#3'>
            News
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#4'>
            Music
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#5'>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
