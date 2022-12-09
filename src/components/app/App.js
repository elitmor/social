import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import Header from "../header/Header";
import Music from "../music/Music";
import Navbar from "../navbar/Navbar";
import News from "../news/News";
import Profile from "../profile/Profile";
import Settings from "../settings/Settings";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile store={props.store} />} />
            <Route
              path='/dialog/*'
              element={
                <Dialogs
                  dialogsPage={props.state.dialogsPage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
