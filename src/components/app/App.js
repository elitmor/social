import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import "./App.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
