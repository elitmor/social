import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    follow: (userID) => {
      dispatch(followActionCreator(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowActionCreator(userID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
