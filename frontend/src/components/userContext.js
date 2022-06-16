import { createContext } from "react";
export const userContext = createContext({getUser , user: "data"});
async function getUser(username, password) {
  return await fetch("http://localhost:4001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return (data);
    });
}
