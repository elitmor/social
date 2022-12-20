import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className='header'>
      <img className={styles.logo} src={logo} alt='logo' />
      <div className={styles.login}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink className={styles.link} to={"/login"}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
