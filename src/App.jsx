import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import MainLayout from "./components/MainLayout";
import Login from "./components/Login";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      {/* ToastContainer should be used directly without additional configuration */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light" // Optional, you can choose "dark" or "light"
        style={{
          fontSize: '14px', // Adjust font size
          padding: '10px',  // Adjust padding
        }}
      />
      {currentUser ? (
        <MainLayout /> 
      ) : (
        <Login />  
      )}
    </div>
  );
};

export default App;
