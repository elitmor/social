import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className='nav'>
      <ul className={styles.items}>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
            className={styles.link}
            to='/profile'
          >
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
            className={styles.link}
            to='/dialog'
          >
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
            className={styles.link}
            to='/users'
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
