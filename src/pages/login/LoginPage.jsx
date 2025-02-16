import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { RequiresAuth } from '../../components/RequiresAuth';
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../context/AuthContext";

export function LoginPage() {

  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { loginHandler, token } = useAuth();


  // const handleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const fixedLoginForm = {
    username: 'guestuser',
    password: 'guest123'
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginForm.username, loginForm.password);
  };

  function handleusernameValue(event){
    setUsername(event.target.value)
    console.log(username)
  }
  function handlePassword(event){
    setPassword(event.target.value)
    console.log(password)
  }

  // useEffect(() => {
  //   handleusernameValue()
  //   handlePassword()
  // }, [])

  return (
    <>
      <div className="flex flex-column flex-center h-full w-full">
        <h2 className="fw-black txt-xl mb-m">
          <span className="primary-color">My</span> Website
        </h2>
        <form onSubmit={onSubmitHandler}>
          <div className="white-bg br-m p-xxl pt-xl pb-xl" style={{ width: "30rem" }}>
            <h3 className="txt-center mb-m txt-l">Login</h3>
            <div className="flex flex-column">
              <label for="username">username Address</label>
              <input 
                placeholder='Enter E-mail Address'
                type='text'
                required={true}
                value={loginForm.username} 
                className="p-xs txt-s br-s mb-s " 
                style={{ border: "1px solid grey" }} 
                onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                } 
              />
            </div>
            <div className="flex flex-column">
              <label for="password">Password</label>
              <input 
                placeholder='Enter Password'
                value={loginForm.password}
                required={true}
                type='password' 
                className="p-xs txt-s br-s flex items-center"
                style={{ border: "1px solid grey" }} 
                onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                } 
              />
            </div>
            <div className="flex flex-align-center flex-space-between mt-m mb-m">
              <div className="txt-s flex flex-align-center">
                <input className="p-s txt-cursor" type="checkbox" name="rmbr-me" id="" />
                <label className="pl-xs txt-cursor" for="rmbr-me">Remember Me</label>
              </div>
              <a href="#" className="action-color">Forgot your password?</a>
            </div>
            <button 
            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s" 
            // onClick={handleLogin}
            >
              {/* {isLoggedIn ? "Logout" : "Login"} */}
              Login
            </button>
            {/* <Link to="/signup" className="txt-center w-full mt-m" style={{ display: "block" }}>Login as Guest User</Link> */}
            <button onClick={() => setLoginForm({
                username: fixedLoginForm.username,
                password: fixedLoginForm.password,
              })
              }
                type='submit'
                className='link-btn'
                style={{ marginLeft: '10px' }}
              >
                Login As a Guest
              </button>
            <Link to="/signup" className="txt-center w-full mt-m" style={{ display: "block" }}>Create New Account</Link>
          </div>
        </form>
      </div>
    </>
  )
}