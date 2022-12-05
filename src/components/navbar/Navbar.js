import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
            to='/news'
          >
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
            className={styles.link}
            to='/music'
          >
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
            className={styles.link}
            to='/settings'
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
