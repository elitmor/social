import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className='header'>
      <img className={styles.logo} src={logo} alt='logo' />
      <div className={styles.login}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
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
