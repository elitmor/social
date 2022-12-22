import axios from "axios";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import styles from "./Users.module.css";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && styles.selected}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={styles.inner}>
            <NavLink to={`/profile/${user.id}`}>
              <img
                className={styles.avatar}
                src={user.photos.small != null ? user.photos.small : avatar}
                alt='avatar'
              />
            </NavLink>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "365d07e3-a8de-4b2d-9ee8-060764dafb61",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "365d07e3-a8de-4b2d-9ee8-060764dafb61",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
