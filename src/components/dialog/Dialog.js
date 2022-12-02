import "./Dialog.module.css";
import styles from "./Dialog.module.css";

const Dialog = () => {
  return (
    <div className={styles.dialog}>
      <div className={styles.items}>
        <div className={`${styles.item} ${styles.active}`}>Alex</div>
        <div className={styles.item}>Ksy</div>
        <div className={styles.item}>Liza</div>
        <div className={styles.item}>John</div>
        <div className={styles.item}>Victor</div>
        <div className={styles.item}>Alexis</div>
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
