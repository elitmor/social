import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className='header'>
      <img className={styles.logo} src={logo} alt='logo' />
    </header>
  );
};

export default Header;
