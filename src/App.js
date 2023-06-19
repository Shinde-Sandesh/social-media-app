import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/home/HomePage';
import { LandingPage } from './pages/landing/LandingPage';
import { LoginPage } from './pages/login/LoginPage';
import { SignUpPage } from './pages/signup/SignUpPage';
import { ExplorePage } from './pages/explore/ExplorePage';
import { BookmarkPage } from './pages/bookmark/BookmarkPage';
import { PostPage } from './pages/post/PostPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/home" element = {<HomePage />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route path = "/explore" element = {<ExplorePage />} />
        <Route path = "/bookmark" element = {<BookmarkPage />} />
        <Route path = "/post" element = {<PostPage />} />
        <Route path = "/profile" element = {<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
