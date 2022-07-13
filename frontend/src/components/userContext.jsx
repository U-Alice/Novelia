import { createContext, useState } from "react";
export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [userDetails, setDetails] = useState({});
  const [profile, setProfile] = useState({});

  return (
    <userContext.Provider value={{  userDetails, setDetails,  profile, setProfile }}>
      {children}
    </userContext.Provider>
  );
};
