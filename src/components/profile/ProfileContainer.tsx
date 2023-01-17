import React from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";
import {
  getProfile,
  getStatus,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/store";
import { ProfileType } from "../../types/types";
import Profile from "./Profile";

type MapPropsType = ReturnType<typeof mapStateToProps>;

type DispatchPropsType = {
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (photoFile: File) => void;
  saveProfile: (
    formData: ProfileType,
    setStatus: any,
    setSubmitting: any,
    goToViewMode: any
  ) => void;
  router: any;
  profile: any;
};

type PropsType = MapPropsType & DispatchPropsType;

type LocalStateType = { isShowMyProfile: boolean };

class ProfileContainer extends React.Component<PropsType, LocalStateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      isShowMyProfile: true,
    };
  }

  componentDidMount() {
    const userIdFromPath = +this.props.router.params.userId;
    const authorisedUserId = this.props.authorisedUserId;

    if (userIdFromPath) {
      this.props.getProfile(userIdFromPath);
      this.props.getStatus(userIdFromPath);
    } else {
      if (this.props.isAuth && authorisedUserId) {
        this.props.getProfile(authorisedUserId);
        this.props.getStatus(authorisedUserId);
      }
    }
  }

  componentDidUpdate(
    prevProps: PropsType & LocalStateType,
    prevState: PropsType & LocalStateType
  ) {
    const userIdFromPath = +this.props.router.params.userId;
    const authorisedUserId = this.props.authorisedUserId;
    const isShowMyProfile = this.state.isShowMyProfile;

    if (isShowMyProfile) {
      if (userIdFromPath === authorisedUserId) {
        this.setState({ isShowMyProfile: false });
      }

      if (!userIdFromPath && this.props.isAuth && authorisedUserId) {
        this.props.getProfile(authorisedUserId);
        this.props.getStatus(authorisedUserId);
        this.setState({ isShowMyProfile: false });
      }
    }
  }

  render() {
    if (!this.props.isAuth && !this.props.router.params.userId) {
      return <Navigate to={"/login"} />;
    }

    const userIdFromPath = +this.props.router.params.userId;
    const authorisedUserId = this.props.authorisedUserId;

    let isOwner = false;
    if (!userIdFromPath && this.props.isAuth) {
      isOwner = true;
    } else if (userIdFromPath === authorisedUserId) {
      isOwner = true;
    }

    return (
      <div>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          isOwner={isOwner}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile as any}
        />
      </div>
    );
  }
}

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

const ProfileContainerCompose = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  })
)(ProfileContainer);

export default ProfileContainerCompose;
