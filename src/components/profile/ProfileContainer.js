import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import {
  addPost,
  setUserProfile,
  updateNewPostText,
} from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/20178`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, {
  setUserProfile,
  addPost,
  updateNewPostText,
})(ProfileContainer);
