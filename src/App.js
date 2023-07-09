import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/home/HomePage';
import { LandingPage } from './pages/landing/LandingPage';
import { LoginPage } from './pages/login/LoginPage';
import { SignUpPage } from './pages/signup/SignUpPage';
import { ExplorePage } from './pages/explore/ExplorePage';
import { BookmarkPage } from './pages/bookmark/BookmarkPage';
import { PostPage } from './pages/post/PostPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import Mockman from "mockman-js";
import './App.css';
import { RequiresAuth } from './components/RequiresAuth';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/home" element = {<HomePage />} />
        {/* <Route path = "/home" element = {<RequiresAuth><HomePage /></RequiresAuth>} /> */}
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route path = "/explore" element = {<ExplorePage />} />
        <Route path = "/bookmark" element = {<BookmarkPage />} />
        {/* <Route path = "/bookmark" element = {<RequiresAuth><BookmarkPage /></RequiresAuth>} /> */}
        <Route path = "/post/:postId" element = {<PostPage />} />
        <Route path = "/profile" element = {<ProfilePage />} />
        {/* <Route path = "/profile" element = {<RequiresAuth><ProfilePage /></RequiresAuth>} /> */}
        <Route path = "/mockman" element = {<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
