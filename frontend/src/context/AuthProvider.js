//Library imports
import { createContext, useState, useContext, useEffect } from "react";

//this is a dedicated compontent that must be exported to the highest layer
//after exproting it to the highest level and wrapping all other components inside all the functions inside it will be
//accesible via custom hook

//Step 1 creating context Hook
const AuthContext = createContext();

//Step 2 Creating Wrapper cmpoonent
export default function AuthProvider({ children }) {
  //token is accessible from the localStorage
  //Thus it must be stored there before
  //if storing logic changes this part of code should be refactored accordingly
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthentificated, setAuthentificationStatus] = useState(false);

  //As we need state triggering event handler I guess it will be good to have useEffect here

  useEffect(() => {
    if (token) {
      setAuthentificationStatus(true);
    }
  }, [token]);

  //Step 3 Creating functions/methods that should be availabel accross the children of the parent component
  //Login Method Created
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setAuthentificationStatus(true);
  };

  //Logout Method Created
  const logout = (token) => {
    localStorage.removeItem("token");
    setAuthentificationStatus(false);
  };

  //Inheritence is created thus above methods shoudl be accessible throght the custom hook
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
//Step 4 creating the cusom hook that has all the functions above
//creating the custom hook
export const useAuth = () => useContext(AuthContext);
