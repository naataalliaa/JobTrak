import React, { useContext } from "react";  
import { Navigate } from "react-router-dom"; 
import { AuthContext } from "./AuthContent";



const AuthDashboard: React.FC = () => {
  const authContext = useContext(AuthContext);

  // Check if authContext is undefined
  if (!authContext) {
    return null; // or handle it in some way (like showing an error)
  }

  const { token, loading } = authContext;

  if (loading) {
    return null; // Optionally, you could show a loading spinner here
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Dashboard: Protected Content Here</h1>;
}

export default AuthDashboard;
