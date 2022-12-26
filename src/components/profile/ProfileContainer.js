import { Component } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        getProfile={this.props.getProfile}
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
  };
};

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
