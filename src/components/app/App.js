import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "../../common/preloader/Preloader";
import { initializeApp } from "../../redux/app-reducer";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/Login";
import Music from "../music/Music";
import Navbar from "../navbar/Navbar";
import News from "../news/News";
import Settings from "../settings/Settings";
import UsersContainer from "../users/UsersContainer";
import "./App.css";

const ProfileContainer = lazy(() => import("../profile/ProfileContainer"));

const DialogsContainer = lazy(() => import("../dialogs/DialogsContainer"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
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
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
