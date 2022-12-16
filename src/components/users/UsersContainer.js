import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersTotalCountActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
