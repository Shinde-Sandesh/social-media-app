import { useState, useContext } from "react"
import { Link } from "react-router-dom"
// import { RequiresAuth } from './components/RequiresAuth';
import { AuthContext } from "../../context/AuthContext";

export function LoginPage() {

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleEmailValue = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }

  return (
    <>
      <div className="flex flex-column flex-center h-full w-full">
        <h2 className="fw-black txt-xl mb-m">
          <span className="primary-color">My</span> Website
        </h2>
        <form>
          <div className="white-bg br-m p-xxl pt-xl pb-xl" style={{ width: "30rem" }}>
            <h3 className="txt-center mb-m txt-l">Login</h3>
            <div className="flex flex-column">
              <label for="email">Email Address</label>
              <input type="email" name="email" className="p-xs txt-s br-s mb-s " style={{ border: "1px solid grey" }} onChange={handleEmailValue} />
            </div>
            <div className="flex flex-column">
              <label for="password">Password</label>
              <input type="password" name="password" className="p-xs txt-s br-s flex items-center" style={{ border: "1px solid grey" }} onChange={handlePassword} />
            </div>
            <div className="flex flex-align-center flex-space-between mt-m mb-m">
              <div className="txt-s flex flex-align-center">
                <input className="p-s txt-cursor" type="checkbox" name="rmbr-me" id="" />
                <label className="pl-xs txt-cursor" for="rmbr-me">Remember Me</label>
              </div>
              <a href="#" className="action-color">Forgot your password?</a>
            </div>
            <button className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s" onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}
            </button>
            <Link to="/signup" className="txt-center w-full mt-m" style={{ display: "block" }}>Login as Guest User</Link>
            <Link to="/signup" className="txt-center w-full mt-m" style={{ display: "block" }}>Create New Account</Link>
          </div>
        </form>
      </div>
    </>
  )
}