import { Component } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getProfile,
  getStatus,
  savePhoto,
  updateStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.match &&
      this.props.match.params.userId !== prevProps.match.params.userId
    ) {
      this.refreshProfile();
    } else if (!this.props.match && this.props.match !== prevProps.match) {
      this.refreshProfile();
    }
  }

  render() {
    const userIdFromPath = +this.props.router.params.userId;
    const authorisedUserId = this.props.authorisedUserId;

    let isOwner = false;
    if (!userIdFromPath && this.props.isAuth) {
      isOwner = true;
    } else if (userIdFromPath === authorisedUserId) {
      isOwner = true;
    }

    return (
      <Profile
        {...this.props}
        isOwner={isOwner}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
