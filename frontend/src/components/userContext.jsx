import { createContext, useState } from "react";
export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ getUser });
  const [userDetails, setDetails] = useState({});
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
  return (
    <userContext.Provider value={{ user, setUser, userDetails, setDetails }}>
      {children}
    </userContext.Provider>
  );
};
