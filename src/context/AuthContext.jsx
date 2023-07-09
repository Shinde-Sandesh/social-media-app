import axios from 'axios'
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const { username } = user ?? { username: "" };

  const userLoginService = async (loginData) => {
    // try {
    //   const { username, password } = loginData

    //   const response = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers : {
    //       "content-type" : "application/json",
    //       "Accept" : 'application/json'
    //     },
    //     body : JSON.stringify(loginData)
    //   })

    //   response = await response.json()
    //   localStorage.setItem("user-info", JSON.stringify(response))

    // } catch (error) {

    // }
    try {
      const { username, password } = loginData;
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const userSignupService = async (loginData) => {
    try {
      const { username, password } = loginData

      const response = await fetch("/api/auth/signup", {
        method: "POST"
      })

    } catch (error) {

    }
  }

  const loginUser = async (loginData) => {
    try {
      const response = await userLoginService(loginData);
      if (response?.status === 200) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem("user", JSON.stringify(response?.data?.foundUser));
        setIsLoggedIn(true);
        navigate("/home");
        alert("Login successfull");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signupUser = async (signupData) => {
    try {
      const response = await userSignupService(signupData);
      if (response?.status === 201) {
        console.log(response?.data?.createdUser);
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify(response?.data?.createdUser)
        );

        setIsLoggedIn(true);
        navigate("/feed");
        alert("signup successfull");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (username !== "sandeshshinde") {
      setIsLoggedIn(false);
    }
  }, []);

  const value = { loginUser, signupUser, isLoggedIn, setIsLoggedIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
