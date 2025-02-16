import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('loginItems'));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);
  const navigate = useNavigate();

  const LoginService = async ({ username, password }) =>
    axios.post('/api/auth/login', { username, password });

  const SignUpService = async ({ username, password, firstName, lastName }) =>
    axios.post('/api/auth/signup', { username, password, firstName, lastName });

  const loginHandler = async (username, password) => {
    try {
      const { data: { foundUser, encodedToken }, status } = await LoginService({ username, password });
      if (status === 200 || status === 201) {
        localStorage.setItem('loginItems', JSON.stringify({ token: encodedToken, user: foundUser }));
        setCurrUser(foundUser);
        setToken(encodedToken);
        navigate('/home');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const signupHandler = async (username, password, firstName, lastName) => {
    try {
      const { data: { createdUser, encodedToken }, status } = await SignUpService({ username, password, firstName, lastName });
      if (status === 200 || status === 201) {
        localStorage.setItem('loginItems', JSON.stringify({ token: encodedToken, user: createdUser }));
        setCurrUser(createdUser);
        setToken(encodedToken);
        navigate('/feed');
      }
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('loginItems');
    setToken(null);
    setCurrUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, currUser, loginHandler, signupHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
