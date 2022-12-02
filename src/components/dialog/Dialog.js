import { NavLink } from "react-router-dom";
import "./Dialog.module.css";
import styles from "./Dialog.module.css";

const Dialog = () => {
  return (
    <div className={styles.dialog}>
      <div className={styles.items}>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
          className={styles.item}
          to='/dialog/1'
        >
          Alex
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
          className={styles.item}
          to='/dialog/2'
        >
          Ksy
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
          className={styles.item}
          to='/dialog/3'
        >
          Liza
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
          className={styles.item}
          to='/dialog/4'
        >
          John
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
          className={styles.item}
          to='/dialog/5'
        >
          Victor
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
          className={styles.item}
          to='/dialog/6'
        >
          Alexis
        </NavLink>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>Hello</div>
        <div className={styles.message}>You</div>
      </div>
    </div>
  );
};

export default Dialog;
