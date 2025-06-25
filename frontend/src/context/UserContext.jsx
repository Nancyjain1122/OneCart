import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext.jsx";

export const userDataContext = createContext();

function UserContextProvider({ children }) {
  const serverUrl = useContext(authDataContext);
  const [userData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/getcurrentuser`, {
        withCredentials: true,
      });
      setUserData(result.data.user);
    } catch (error) {
      console.error("getCurrentUser error:", error.response?.data || error);
      setUserData(null);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <userDataContext.Provider value={{ userData, setUserData, getCurrentUser }}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContextProvider;
