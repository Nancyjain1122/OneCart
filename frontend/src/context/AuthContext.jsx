import React, { createContext } from 'react';

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const serverUrl = 'https://onecart-backend-jkd8.onrender.com'; // your backend URL

  return (
    <authDataContext.Provider value={serverUrl}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
