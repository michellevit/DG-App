import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from "axios";

interface User {
  id?: number;
  email: string;
  username: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};


export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = localStorage.getItem('sessionToken');
    console.log('Retrieved token from local storage:', token);
    if (token) {
      axios.get(`${process.env.REACT_APP_API_URL}/validate_token`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        if (response.data.valid) {
          setUser(response.data.user);
        } else {
          localStorage.removeItem('sessionToken');
          setUser(null);
        }
      })
      .catch(error => {
        console.error('Token validation error:', error);
        localStorage.removeItem('sessionToken');
        setUser(null);
        console.log("Check login error", error);
      });
    }
  }, []);


  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
