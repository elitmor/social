import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = ({ name, id }) => {
  const path = `dialog/${id}`;
  return (
    <NavLink
      style={({ isActive }) => ({ color: isActive ? "#00d8ff" : "#fff" })}
      className={styles.item}
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default DialogItem;
