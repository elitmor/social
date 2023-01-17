import { FC } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/store";

let mapStateToPropsForRedirect = (state: AppStateType) =>
  ({
    isAuth: state.auth.isAuth,
  } as MapPropsType);

type MapPropsType = {
  isAuth: boolean;
};
type DispatchPropsType = {};

export function withAuthRedirect<WCP extends object>(
  WrappedComponent: React.ComponentType<WCP>
) {
  const RedirectComponent: FC<MapPropsType & DispatchPropsType> = (props) => {
    let { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to='/login' />;

    return <WrappedComponent {...(restProps as WCP)} />;
  };

  let ConnectedAuthRedirectComponent = connect<
    MapPropsType,
    DispatchPropsType,
    WCP,
    AppStateType
  >(
    mapStateToPropsForRedirect,
    {}
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}
