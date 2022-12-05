import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialog from "../dialog/Dialog";
import Header from "../header/Header";
import Music from "../music/Music";
import Navbar from "../navbar/Navbar";
import News from "../news/News";
import Profile from "../profile/Profile";
import Settings from "../settings/Settings";
import "./App.css";

const App = ({ postsData, dialogsData, messagesData }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path='/profile'
              element={<Profile postsData={postsData} />}
            />
            <Route
              path='/dialog/*'
              element={
                <Dialog dialogsData={dialogsData} messagesData={messagesData} />
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
