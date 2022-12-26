import { Component } from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 20178;
    }
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        getProfile={this.props.getProfile}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getProfile,
})(WithUrlDataContainerComponent);
