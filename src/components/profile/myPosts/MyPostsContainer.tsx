import { connect } from "react-redux";
import { actions } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/store";
import MyPosts, { DispatchPropsType, MapPropsType } from "./MyPosts";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect<
  MapPropsType,
  DispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  addPost: actions.addPost,
})(MyPosts);

export default MyPostsContainer;
