import { FC } from "react";
import { NavLink } from "react-router-dom";
// import avatar from "../../assets/avatar";
import { UserType } from "../../types/types";
import styles from "./User.module.css";

type PropsType = {
  user: UserType;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const User: FC<PropsType> = ({
  user,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={
                user.photos.small !== null
                  ? user.photos.small
                  : "https://thumbs.dreamstime.com/b/businessman-avatar-line-icon-vector-illustration-design-79327237.jpg"
              }
              className={styles.avatar}
              alt='avatar'
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
