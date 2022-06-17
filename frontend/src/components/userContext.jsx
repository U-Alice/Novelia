import { createContext, useState } from "react";
export const userContext = createContext({ getUser, user: "data" });
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("data");
  async function getUser(username, password) {
  //    await fetch("http://localhost:4001/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: username,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     });
  // }
  return (
    <userContext.Provider value = {{user, setUser}}>
      {children}
    </userContext.Provider>
  )
};
