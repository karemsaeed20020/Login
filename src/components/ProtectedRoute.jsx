import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.user); 

  if (!token) {
    return <Navigate to="/login" replace />; 
  }

  return children; 
};

export default ProtectedRoute;
