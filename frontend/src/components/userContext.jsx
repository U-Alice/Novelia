import { createContext, useState } from "react";
import Cookie from "react-cookies"
export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ getUser });
  const [userDetails, setDetails] = useState({});
  const [profile, setProfile] = useState({});
  async function getUser(username, password) {
    const api = await fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });
    const data = await api.json();
    setDetails(data);
    handleCookie(data.firstName)
    // setCookie ("name", data.)
  }
  function handleCookie(cookieName,cookie1, cookie2, cookie3){
    Cookie.set(cookieName, cookie1, {
      path: "/"
    })
  }

  async function getProfile(){
    const url = "http://localhost:4001/getProfile";
    const api = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    const data = await api.json()
    setProfile(data);
  }
  return (
    <userContext.Provider value={{ user, setUser, userDetails, setDetails, getProfile, profile }}>
      {children}
    </userContext.Provider>
  );
};
