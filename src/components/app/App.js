import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";
import Header from "../header/Header";
import Music from "../music/Music";
import Navbar from "../navbar/Navbar";
import News from "../news/News";
import Profile from "../profile/Profile";
import Settings from "../settings/Settings";
import UsersContainer from "../users/UsersContainer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialog/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
