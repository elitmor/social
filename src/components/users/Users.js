import "./Users.module.css";
import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={styles.inner}>
            <img className={styles.avatar} src={user.photoUrl} alt='avatar' />
            <div>{user.fullName}</div>
            <div>{user.status}</div>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Unfollow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
