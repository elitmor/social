import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import { initializeApp } from "../../redux/app-reducer";
import { AppStateType } from "../../redux/store";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";
import UsersContainer from "../users/UsersContainer";
import "./App.css";

const ProfileContainer = lazy(() => import("../profile/ProfileContainer"));

const DialogsContainer = lazy(() => import("../dialogs/DialogsContainer"));

type MapPropsType = ReturnType<typeof mapStateToProps>;

type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occurred");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Routes>
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/dialog/*' element={<DialogsContainer />} />
                <Route
                  path='/users'
                  element={<UsersContainer pageTitle={"Самураи"} />}
                />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<div>404 NOT FOUND</div>} />
                <Route path='/' element={<Navigate to='/profile' />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
