import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";
import avatar from "../../../assets/avatar.svg";

const DialogItem = ({ name, id }) => {
  const path = `dialog/${id}`;
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt='avatar' />
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
        className={styles.link}
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
