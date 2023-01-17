import { FC } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export type MapPropsType = {
  isAuth: boolean;
  login: string | null;
};
export type DispatchPropsType = {
  logout: () => void;
};

const Header: FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
    <header className='header'>
      <img
        className={styles.logo}
        src='https://blog.leonhassan.co.uk/content/images/2019/01/react-1.svg'
        alt='logo'
      />
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
