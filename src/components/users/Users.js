import axios from "axios";
import { Component } from "react";
import avatar from "../../assets/avatar.svg";
import "./Users.module.css";
import styles from "./Users.module.css";

class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                className={this.props.currentPage === page && styles.selected}
                onClick={() => {
                  this.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div className={styles.inner}>
              <img
                className={styles.avatar}
                src={user.photos.small != null ? user.photos.small : avatar}
                alt='avatar'
              />
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
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
  }
}

export default Users;
