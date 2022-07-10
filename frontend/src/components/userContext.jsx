import { createContext, useState } from "react";
export const userContext = createContext();
export const UserProvider = ({ children }) => {
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
    <userContext.Provider value={{ getUser, userDetails, setDetails, getProfile, profile }}>
      {children}
    </userContext.Provider>
  );
};
